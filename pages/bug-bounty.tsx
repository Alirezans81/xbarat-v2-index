import "../app/globals.css";
import {
  ThemeState,
  useFontStore,
  useLoadingStore,
  useLocaleFileStore,
  useRouteStore,
  useThemeStore,
} from "@/lib/store";
import Image from "next/image";
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Dropdown from "@/components/index/Dropdown";
import Logo from "@/public/images/logo.png";
import Footer from "@/components/index/Footer";
import Navbar from "@/components/common/Navbar";
import SlideMenu from "@/components/common/SlideMenu";
import Button from "@/components/common/Button";

export default function BugBounty() {
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
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("")
  const [dropdownState, setDropdownState] = useState(["a", "j", "d", "f"]);
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
      {
        id: "",
        title: "Bug Bounty",
        route: "/bug-bounty",
      },
    ]);
    setActiveRoute("/");
  }, [lang]);

  if (lang && font && theme && routes && activeRoute) {
    return (
      <div id="outer-container">
        <SlideMenu
          isOpen={menuIsOpen}
          onClose={() => setMenuIsOpen(false)}
          font={font}
          theme={theme}
          lang={lang}
        />

        <div
          dir={font === "Fa" || font === "Ar" ? "rtl" : "ltr"}
          id="page-wrap"
          ref={navbarDivRef as LegacyRef<HTMLDivElement>}
          className={`w-[100dvw] h-[100dvh] bg-${theme} ${isLoading ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"
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

          <div className={`w-full flex flex-col justify-center items-center overflow-hidden gap-y-10 pb-10`}>
            <div className={`w-full max-w-4xl text-xl h-fit flex justify-center text-${oppositeTheme}`}>Here at Xbarat we aim for Perfection and so we ask you on how should we improve the stability and maitainability of our website.
              Here at Xbarat we aim for Perfection and so we ask you on how should we improve the stability and maitainability of our website.
            </div>
            <div className="max-w-4xl w-full flex flex-col bg-dark-back border-2 border-solid border-blue  rounded-2xl rounded-tl-sm gap-y-2 ">
              <div className={`w-fit h-fit bg-blue font-bold text-xl rounded-br-full pr-10 pl-6 py-1   text-${oppositeTheme}`}>Bug Report Form</div>
              <div className="w-full flex flex-row p-5 gap-x-5">
                <div className="w-1/2 flex flex-col gap-y-4">
                  <div className="gap-y-1 flex flex-col">
                    <span className={`text-${oppositeTheme} font-bold pl-1`}>
                      How did you find the Bug?
                    </span>

                    <input
                      placeholder="Occurance of the Bug..."
                      className="w-full bg-dark rounded-xl overflow-hidden px-4 py-3"
                    />
                  </div>
                  <button className={`w-full h-fit flex flex-col bg-dark rounded-2xl text-gray`} onClick={() => setOpenDropdown(!openDropdown)}>
                    <div className=" w-full h-fit p-4 flex flex-row">
                      <span>Select The Place That You Saw the Bug</span>
                      <div className={openDropdown ? "" : ""}></div>
                    </div>
                    <Dropdown
                      lang={lang}
                      font={font}
                      theme={theme}
                      openDropdown={openDropdown}
                      dropdownState={dropdownState}
                      setChoice={setSelectedLocation}
                    />
                  </button>
                </div>
                <div className="w-1/2 flex flex-col gap-y-4">
                  <div className="gap-y-1 flex flex-col">
                    <span className={`text-${oppositeTheme} font-bold pl-1`}>
                      What is The Bug?
                    </span>

                    <input
                      placeholder="Desribe The Bug..."
                      className="w-full bg-dark rounded-xl overflow-hidden px-4 py-3"
                    />
                  </div>
                  <div className="gap-y-1 flex flex-col">
                    <span className={`text-${oppositeTheme} font-bold pl-1`}>
                      What was the System's Expected Behaviour?
                    </span>

                    <input
                      placeholder="Desribe The Expected Functionality..."
                      className="w-full bg-dark rounded-xl overflow-hidden px-4 py-3"
                    />
                  </div>
                  <textarea className="w-full bg-dark rounded-xl overflow-hidden px-4 py-3" />

                  <Button lang={lang} font={font} theme="dark" className="w-full">
                    {"Submit"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Footer lang={lang} font={font} theme={theme} />
        </div >
      </div >
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
