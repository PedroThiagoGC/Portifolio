"use client";

import { useEffect, useRef } from "react";
import { TYPEWRITER_PHRASES } from "@/content/home";

// Máquina de escrever do hero — exclusiva da home, por isso mora aqui e não
// nos efeitos globais. Sob prefers-reduced-motion mostra a primeira frase
// estática, sem timer nenhum.
export function Typewriter() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = TYPEWRITER_PHRASES[0];
      return;
    }

    let phrase = 0;
    let chars = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = TYPEWRITER_PHRASES[phrase];
      if (!deleting) {
        el.textContent = current.substring(0, chars + 1);
        chars++;
        if (chars === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
        timer = setTimeout(type, 60);
      } else {
        el.textContent = current.substring(0, chars - 1);
        chars--;
        if (chars === 0) {
          deleting = false;
          phrase = (phrase + 1) % TYPEWRITER_PHRASES.length;
          timer = setTimeout(type, 400);
          return;
        }
        timer = setTimeout(type, 30);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="typewriter-wrap">
      <span className="typewriter" ref={ref} />
      <span className="typewriter-cursor" aria-hidden="true" />
    </div>
  );
}
