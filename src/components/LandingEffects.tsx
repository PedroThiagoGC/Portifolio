"use client";

import { useEffect, useRef } from "react";

const PHRASES = [
  "Landing Pages que convertem.",
  "Sistemas de Agendamento Online.",
  "PDV para o seu negócio.",
  "Presença no Google Maps.",
  "Tráfego Pago que traz clientes.",
  "Automação de processos internos.",
  "Tecnologia para a sua dor.",
];

// Reúne toda a interatividade do protótipo (cursor custom, partículas no canvas,
// typewriter, scroll-reveal, contadores animados e tilt 3D) em um único client component.
// O conteúdo textual fica no servidor (page.tsx) para SEO; aqui só os efeitos visuais.
export function LandingEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = cursorRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    if (!cur || !ring || !canvas) return;

    const cleanups: Array<() => void> = [];
    let ringRaf = 0;
    let particleRaf = 0;

    // CURSOR
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);
    cleanups.push(() => document.removeEventListener("mousemove", onMove));

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      ringRaf = requestAnimationFrame(animRing);
    };
    animRing();

    const hoverEls = document.querySelectorAll(
      "a,.service-card,.browser,.audience-card",
    );
    const enter = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1.6)";
      ring.style.borderColor = "rgba(0,255,148,0.5)";
    };
    const leave = () => {
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.borderColor = "rgba(0,194,255,0.4)";
    };
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    cleanups.push(() =>
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      }),
    );

    // PARTICLES
    const ctx = canvas.getContext("2d");
    if (ctx) {
      let W = 0,
        H = 0;
      const particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * 2000,
        y: Math.random() * 1200,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.5 + 0.1,
        c: Math.random() > 0.5 ? "0,194,255" : "0,255,148",
      }));
      const resize = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);
      cleanups.push(() => window.removeEventListener("resize", resize));
      const drawParticles = () => {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = W;
          if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H;
          if (p.y > H) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.c},${p.a})`;
          ctx.fill();
        });
        particleRaf = requestAnimationFrame(drawParticles);
      };
      drawParticles();
    }

    // TYPEWRITER
    const tw = document.getElementById("typewriter");
    let pi = 0,
      ci = 0,
      deleting = false;
    let twTimer: ReturnType<typeof setTimeout>;
    const type = () => {
      if (!tw) return;
      const phrase = PHRASES[pi];
      if (!deleting) {
        tw.textContent = phrase.substring(0, ci + 1);
        ci++;
        if (ci === phrase.length) {
          deleting = true;
          twTimer = setTimeout(type, 1800);
          return;
        }
        twTimer = setTimeout(type, 60);
      } else {
        tw.textContent = phrase.substring(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES.length;
          twTimer = setTimeout(type, 400);
          return;
        }
        twTimer = setTimeout(type, 30);
      }
    };
    type();
    cleanups.push(() => clearTimeout(twTimer));

    // SCROLL REVEAL
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).style.transitionDelay =
                (i % 4) * 0.08 + "s";
              e.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.12 },
      );
      reveals.forEach((r) => obs.observe(r));
      cleanups.push(() => obs.disconnect());

      // COUNTER ANIMATION
      const countObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target as HTMLElement;
              const target = parseInt(el.dataset.count || "0", 10);
              const suffix = el.dataset.suffix || "";
              let start = 0;
              const inc = target / 60;
              const timer = setInterval(() => {
                start += inc;
                if (start >= target) {
                  start = target;
                  clearInterval(timer);
                }
                el.textContent = Math.round(start) + suffix;
              }, 1500 / 60);
              countObs.unobserve(el);
            }
          });
        },
        { threshold: 0.5 },
      );
      document
        .querySelectorAll<HTMLElement>("[data-count]")
        .forEach((el) => countObs.observe(el));
      cleanups.push(() => countObs.disconnect());
    } else {
      // Fallback sem IntersectionObserver: revela tudo.
      reveals.forEach((r) => r.classList.add("visible"));
    }

    // 3D TILT
    const tiltEls = document.querySelectorAll<HTMLElement>(
      ".service-card,.audience-card",
    );
    const tiltHandlers: Array<{
      el: HTMLElement;
      move: (e: Event) => void;
      lv: () => void;
    }> = [];
    tiltEls.forEach((card) => {
      const move = (ev: Event) => {
        const e = ev as MouseEvent;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-6px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
      };
      const lv = () => {
        card.style.transform = "";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", lv);
      tiltHandlers.push({ el: card, move, lv });
    });
    cleanups.push(() =>
      tiltHandlers.forEach((h) => {
        h.el.removeEventListener("mousemove", h.move);
        h.el.removeEventListener("mouseleave", h.lv);
      }),
    );

    return () => {
      cancelAnimationFrame(ringRaf);
      cancelAnimationFrame(particleRaf);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <canvas id="particles-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div id="cursor" ref={cursorRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
