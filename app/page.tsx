"use client";

import Navbar from "@/components/common/Navbar";
import Hero from "@/components/index/Hero";
import {
  ThemeState,
  useFontStore,
  useLocaleFileStore,
  useThemeStore,
  useRouteStore,
  useLoadingStore,
} from "@/lib/store";
import Image from "next/image";

import Logo from "@/public/images/logo.png";
import Agencies from "@/components/index/Agencies";
import HowItWorks from "@/components/index/HowItWorks";
import Features from "@/components/index/Features";
import SocialMedia from "@/components/index/SocialMedia";
import Journey from "@/components/index/Journey";
import SupportMap from "@/components/index/SupportMap";
import Footer from "@/components/index/Footer";
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import SlideMenu from "@/components/common/SlideMenu";

export default function Page() {
  const lang = useLocaleFileStore((state) => state.localeFile);
  const theme = useThemeStore((state) => state.theme);
  const font = useFontStore((state) => state.font);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const routes = useRouteStore((state) => state.routes);
  const setRoutes = useRouteStore((state) => state.setRoutes);
  const activeRoute = useRouteStore((state) => state.activeRoute);
  const setActiveRoute = useRouteStore((state) => state.setActiveRoute);

  const navbarDivRef: MutableRefObject<HTMLDivElement | undefined> = useRef();

  const oppositeTheme: ThemeState["theme"] =
    theme === ("dark" as ThemeState["theme"]) ? "light" : "dark";

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    setRoutes([
      {
        id: "",
        title: lang["home"],
        route: "/",
      },
      {
        id: "",
        title: lang["index-privacy-&-policy"],
        route: "/privacy-&-policy",
      },
      // {
      //   id: "",
      //   title: "Toturial",
      //   route: "/toturial",
      // },
    ]);
    setActiveRoute("/");
  }, [lang]);

  if (lang && font && theme && routes && activeRoute) {
    return (
      <div id="outer-container">
        <SlideMenu isOpen={menuIsOpen} onClose={() => setMenuIsOpen(false)} />

        <div
          dir={font === "Fa" ? "rtl" : "ltr"}
          id="page-wrap"
          ref={navbarDivRef as LegacyRef<HTMLDivElement>}
          className={`w-[100dvw] h-[100dvh] bg-${theme} ${
            isLoading ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"
          }`}
        >
          
          <Navbar
            lang={lang}
            font={font}
            theme={theme}
            routes={routes}
            activeRoute={activeRoute}
            setMenuIsOpen={setMenuIsOpen}
            navbarDivRef={navbarDivRef}
          />

          <header className="w-full flex justify-center">
            <div className="max-w-[1280px] px-[7%] xl:px-0">
              <Hero lang={lang} font={font} theme={theme} />
            </div>
          </header>

          <Agencies lang={lang} font={font} theme={theme} />

          <div className={`w-full flex justify-center overflow-hidden`}>
            <div className="max-w-[1280px] px-[7%] xl:px-0 flex flex-col gap-y-20 py-16">
              <HowItWorks lang={lang} font={font} theme={theme} />
              <Features lang={lang} font={font} theme={theme} />
              <SocialMedia lang={lang} font={font} theme={theme} />
              <Journey lang={lang} font={font} theme={theme} />
              <SupportMap lang={lang} font={font} theme={theme} />
            </div>
          </div>

          <Footer lang={lang} font={font} theme={theme} />
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
