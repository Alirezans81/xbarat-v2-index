"use client";

import Navbar from "@/components/index/Navbar";
import { ThemeState, useLocaleFileStore, useThemeStore } from "@/lib/store";

export default function Page() {
  const lang = useLocaleFileStore((state) => state.localeFile);
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`w-[100dvw] h-[100dvh] bg-${theme}`}>
      <Navbar lang={lang} theme={theme as unknown as ThemeState} />
    </div>
  );
}
