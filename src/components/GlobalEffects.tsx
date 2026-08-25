"use client";

import { useEffect, useRef, useState } from "react";

// Efeitos decorativos que valem uma vez por sessão: cursor custom, partículas
// e grade de fundo. Montado no layout, sobrevive à navegação entre rotas.
//
// Não monta nada em aparelho de toque nem sob prefers-reduced-motion: cursor
// custom não faz sentido sem mouse e as partículas custam CPU justamente no
// aparelho mais fraco. O CSS já esconde o cursor no mobile — aqui paramos
// também o JavaScript, que antes seguia animando 70 partículas em rAF.
export function GlobalEffects() {
  const [enabled, setEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(hasHover && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const cur = cursorRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    if (!cur || !ring || !canvas) return;

    const cleanups: Array<() => void> = [];
    let cursorRaf = 0;
    let particleRaf = 0;

    // CURSOR — leitura de posição no evento, escrita só dentro do rAF,
    // para não intercalar leitura de geometria com escrita de estilo.
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    cleanups.push(() => document.removeEventListener("mousemove", onMove));

    const drawCursor = () => {
      cur.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${ringScale})`;
      cursorRaf = requestAnimationFrame(drawCursor);
    };

    // Hover delegado: um listener no documento cobre qualquer página, sem
    // precisar religar em cada troca de rota.
    let ringScale = 1;
    const HOVER_SELECTOR = "a,button,.service-card,.browser,.audience-card,.founder-card";
    const onOver = (e: Event) => {
      const t = e.target as Element | null;
      if (t?.closest?.(HOVER_SELECTOR)) {
        ringScale = 1.6;
        ring.style.borderColor = "rgba(0,255,148,0.5)";
      }
    };
    const onOut = (e: Event) => {
      const t = e.target as Element | null;
      if (t?.closest?.(HOVER_SELECTOR)) {
        ringScale = 1;
        ring.style.borderColor = "rgba(0,194,255,0.4)";
      }
    };
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    cleanups.push(() => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    });

    drawCursor();

    // PARTÍCULAS — densidade proporcional à área da tela, com teto de 70.
    const ctx = canvas.getContext("2d");
    if (ctx) {
      let W = 0,
        H = 0;
      const count = Math.min(
        70,
        Math.round((window.innerWidth * window.innerHeight) / 26000),
      );
      const particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
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

      // Aba em segundo plano não precisa de animação.
      const onVisibility = () => {
        if (document.hidden) {
          cancelAnimationFrame(particleRaf);
          cancelAnimationFrame(cursorRaf);
        } else {
          drawParticles();
          drawCursor();
        }
      };
      document.addEventListener("visibilitychange", onVisibility);
      cleanups.push(() =>
        document.removeEventListener("visibilitychange", onVisibility),
      );
    }

    return () => {
      cancelAnimationFrame(cursorRaf);
      cancelAnimationFrame(particleRaf);
      cleanups.forEach((fn) => fn());
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <canvas id="particles-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <div id="cursor" ref={cursorRef} aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
