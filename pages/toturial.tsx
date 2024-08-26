import "../app/globals.css";
import Navbar from "@/components/common/Navbar";
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
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import SlideMenu from "@/components/common/SlideMenu";
import Button from "@/components/common/Button";
import ReactPlayer from "react-player";

export default function Toturial() {
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
      {
        id: "",
        title: "Toturial",
        route: "/toturial",
      },
    ]);
    setActiveRoute("/");
  }, [lang]);

  if (lang && font && theme && routes && activeRoute) {
    return (
      <div className={`absolute w-100vw h-100vh bg-${theme} flex flex-col`}>
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
          <div className="w-full flex justify-center">
            <div className="max-w-[1280px] w-full lg:w-[1280px] px-[7%] xl:px-0 pb-10">
              <div className="w-full flex flex-col items-center gap-y-4 text-center my-10">
                <span
                  className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
                >
                  {lang["index-journey-title"]}
                </span>
                <div className="flex flex-col items-center text-gray text-xl">
                  <span>{lang["index-journey-desc-1"]}</span>
                  <span>{lang["index-journey-desc-2"]}</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-5 items-center">
                <div className="w-full flex lg:flex-row lg:h-[36dvw] flex-col gap-x-8 gap-y-4">
                  <div
                    className={`rounded-3xl overflow-hidden bg-${theme}-glass lg:!h-auto h-[48.042dvw] relative`}
                  >
                    <span
                      className={`absolute ${
                        font === "Fa" ? "right-3.5" : "left-3.5"
                      } top-3.5 z-10 md:text-base text-sm bg-blue text-light px-5 pt-2.5 pb-1.5 rounded-2xl font-${font}-regular`}
                    >
                      For Mobile
                    </span>
                    <ReactPlayer
                      width={"100%"}
                      height={"100%"}
                      url={"/videos/mobile.mp4"}
                      controls={true}
                    />
                  </div>

                  <div
                    className={`flex-1 rounded-3xl overflow-hidden bg-${theme}-glass relative`}
                  >
                    <span
                      className={`absolute ${
                        font === "Fa" ? "right-3.5" : "left-3.5"
                      } top-3.5 z-10 md:text-base text-sm bg-blue text-light px-5 pt-2.5 pb-1.5 rounded-2xl font-${font}-regular`}
                    >
                      For Desktop
                    </span>
                    <ReactPlayer
                      width={"100%"}
                      height={"100%"}
                      url={"/videos/desktop.mp4"}
                      controls={true}
                    />
                  </div>
                </div>

                <Button font={font} lang={lang} theme={theme}>
                  {null}
                </Button>
              </div>
            </div>
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
