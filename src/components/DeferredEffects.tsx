"use client";

import dynamic from "next/dynamic";

// Os efeitos globais (partículas, cursor custom, grade de fundo) são
// decorativos: saem do bundle inicial e carregam depois da hidratação.
// ssr:false porque nada disso tem versão em HTML — e por isso exige um
// Client Component como este para hospedar o dynamic import.
const GlobalEffects = dynamic(
  () => import("./GlobalEffects").then((m) => m.GlobalEffects),
  { ssr: false },
);

export function DeferredEffects() {
  return <GlobalEffects />;
}
