"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Efeitos ligados ao conteúdo da página: scroll-reveal, contadores e tilt 3D.
//
// Fica no layout, mas re-executa a cada troca de rota (deps: pathname). Sem
// isso o observer ficaria preso aos elementos da primeira página e qualquer
// rota aberta por navegação client-side apareceria em branco, porque .reveal
// nasce com opacity:0 e só o observer adiciona .visible.
export function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((r) => r.classList.add("visible"));
      return;
    }

    // SCROLL REVEAL
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.style.transitionDelay = `${(i % 4) * 0.08}s`;
          el.classList.add("visible");
          obs.unobserve(el);
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((r) => obs.observe(r));
    cleanups.push(() => obs.disconnect());

    // CONTADORES — rAF em vez de setInterval, com cancelamento no cleanup.
    const counterRafs: number[] = [];
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          countObs.unobserve(el);
          const target = parseInt(el.dataset.count || "0", 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1500;
          let startedAt = 0;
          const tick = (now: number) => {
            if (!startedAt) startedAt = now;
            const progress = Math.min((now - startedAt) / duration, 1);
            el.textContent = Math.round(target * progress) + suffix;
            if (progress < 1) counterRafs.push(requestAnimationFrame(tick));
          };
          counterRafs.push(requestAnimationFrame(tick));
        });
      },
      { threshold: 0.5 },
    );
    document
      .querySelectorAll<HTMLElement>("[data-count]")
      .forEach((el) => countObs.observe(el));
    cleanups.push(() => {
      countObs.disconnect();
      counterRafs.forEach((id) => cancelAnimationFrame(id));
    });

    // TILT 3D — só com mouse de verdade. O rect é medido uma vez no mouseenter
    // e a transform é escrita dentro de rAF: antes o getBoundingClientRect
    // rodava a cada mousemove, o que forçava reflow (60ms no PageSpeed).
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasHover && !reduced) {
      const tiltEls = document.querySelectorAll<HTMLElement>(
        ".service-card,.audience-card,.founder-card",
      );
      const handlers: Array<{
        el: HTMLElement;
        enter: () => void;
        move: (e: Event) => void;
        leave: () => void;
      }> = [];

      tiltEls.forEach((card) => {
        let rect: DOMRect | null = null;
        let raf = 0;

        const enter = () => {
          rect = card.getBoundingClientRect();
        };
        const move = (ev: Event) => {
          if (!rect) return;
          const e = ev as MouseEvent;
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            card.style.transform = `translateY(-6px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
          });
        };
        const leave = () => {
          cancelAnimationFrame(raf);
          rect = null;
          card.style.transform = "";
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mousemove", move, { passive: true });
        card.addEventListener("mouseleave", leave);
        handlers.push({ el: card, enter, move, leave });
      });

      cleanups.push(() =>
        handlers.forEach((h) => {
          h.el.removeEventListener("mouseenter", h.enter);
          h.el.removeEventListener("mousemove", h.move);
          h.el.removeEventListener("mouseleave", h.leave);
        }),
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
