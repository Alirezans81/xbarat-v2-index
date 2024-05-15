"use client";

import Navbar from "@/components/common/Navbar";
import Hero from "@/components/index/Hero";
import {
  ThemeState,
  useFontStore,
  useLocaleFileStore,
  useThemeStore,
  useRouteStore,
} from "@/lib/store";
import Image from "next/image";

import Logo from "@/public/images/logo.png";
import Agencies from "@/components/index/Agencies";
import HowItWorks from "@/components/index/HowItWorks";
import Features from "@/components/index/Features";
import SocialMedia from "@/components/index/SocialMedia";
import Journey from "@/components/index/Journey";
import Map from "@/components/index/Map";

export default function Page() {
  const lang = useLocaleFileStore((state) => state.localeFile);
  const theme = useThemeStore((state) => state.theme);
  const font = useFontStore((state) => state.font);
  const routes = useRouteStore((state) => state.routes);
  const activeRoute = useRouteStore((state) => state.activeRoute);

  const oppositeTheme: string =
    theme === ("dark" as unknown as ThemeState) ? "light" : "dark";

  if (lang && font && theme && routes && activeRoute) {
    return (
      <div className={`w-[100dvw] min-h-[100dvh] bg-${theme}`}>
        <Navbar
          lang={lang}
          font={font}
          theme={theme as unknown as ThemeState}
          routes={routes}
          activeRoute={activeRoute}
        />

        <div className="w-full flex justify-center">
          <div className="max-w-[1280px] px-[6%] xl:px-0">
            <Hero
              lang={lang}
              font={font}
              theme={theme as unknown as ThemeState}
            />
          </div>
        </div>

        <Agencies
          lang={lang}
          font={font}
          theme={theme as unknown as ThemeState}
        />

        <div className="w-full flex justify-center overflow-hidden">
          <div className="max-w-[1280px] px-[6%] xl:px-0 flex flex-col gap-y-20 py-16">
            <HowItWorks
              lang={lang}
              font={font}
              theme={theme as unknown as ThemeState}
            />
            <Features
              lang={lang}
              font={font}
              theme={theme as unknown as ThemeState}
            />
            <SocialMedia
              lang={lang}
              font={font}
              theme={theme as unknown as ThemeState}
            />
            <Journey
              lang={lang}
              font={font}
              theme={theme as unknown as ThemeState}
            />
            <Map
              lang={lang}
              font={font}
              theme={theme as unknown as ThemeState}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`w-browser h-browser bg-${theme} relative transition-all duration-300`}
      >
        <div className="absolute w-browser h-browser bg-login flex justify-evenly">
          <div className="block my-auto mx-auto">
            <div className="flex flex-col justify-center items-center">
              <Image alt="Logo" className="w-56 h-w-56" src={Logo} />
              <h1
                className={`text-7xl md:text-8xl text-yellow-gradient pt-2 mt-2 -mb-4 md:-mb-6`}
              >
                Xbarat
              </h1>
              <span
                className={`text-3xl md:text-4xl text-${oppositeTheme} mt-5`}
              >
                When you are enough
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
