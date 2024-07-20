import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import Link from "next/link";
import { ThemeState } from "@/lib/store";
import Button from "./Button";
import { MutableRefObject, useEffect, useState } from "react";
import path from "path";
import Logo from "@/public/images/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Navbar(
  props: PageProps & {
    routes: any[];
    activeRoute: string;
    setMenuIsOpen: (newState: boolean) => void;
    navbarDivRef: MutableRefObject<HTMLDivElement | undefined>;
  }
) {
  const {
    lang,
    theme,
    font,
    routes,
    activeRoute,
    setMenuIsOpen,
    navbarDivRef,
  } = props;
  const pathname = usePathname();

  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(navbarDivRef.current?.scrollTop || 0);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    navbarDivRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      navbarDivRef.current?.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`sticky left-0 top-0 w-[100dvw] flex items-center justify-center transition-all duration-500 z-50 ${
        scrollY === 0 ? `` : `bg-${theme}-back shadow-xl shadow-black/5`
      }`}
    >
      <div
        className={`w-full flex justify-between items-center max-w-[1280px] px-[7%] xl:px-0 ${
          font === "Fa" ? "my-4" : "my-5"
        } `}
      >
        <Link className="flex items-center gap-x-2" href="/">
          <Image
            src={Logo}
            className="sm:w-12 sm:h-12 w-[2.6rem] h-[2.6rem]"
            alt="Logo"
          />
          <div
            className={`flex flex-col ${
              font === "Fa" ? "gap-y-0.5" : "-mb-1"
            } `}
          >
            <span
              className={`w-fit text-yellow-gradient font-${font}-bold text-2xl sm:text-3xl`}
            >
              {lang["logo-header"]}
            </span>
            <span
              className={`text-${oppositeTheme} font-${font}-thin ${
                font === "Fa" ? "-mt-1" : "-mt-2"
              } sm:text-xl`}
            >
              {lang["slogan"]}
            </span>
          </div>
        </Link>

        <button
          className={`p-3 bg-${theme} rounded-full lg:hidden`}
          onClick={() => setMenuIsOpen(true)}
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <svg
              viewBox="0 0 20 12"
              className="w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33333 11.3333C5.33333 11.1565 5.40357 10.987 5.5286 10.8619C5.65362 10.7369 5.82319 10.6667 6 10.6667H19.3333C19.5101 10.6667 19.6797 10.7369 19.8047 10.8619C19.9298 10.987 20 11.1565 20 11.3333C20 11.5101 19.9298 11.6797 19.8047 11.8047C19.6797 11.9298 19.5101 12 19.3333 12H6C5.82319 12 5.65362 11.9298 5.5286 11.8047C5.40357 11.6797 5.33333 11.5101 5.33333 11.3333ZM2.66667 6C2.66667 5.82319 2.7369 5.65362 2.86193 5.5286C2.98695 5.40357 3.15652 5.33333 3.33333 5.33333H16.6667C16.8435 5.33333 17.013 5.40357 17.1381 5.5286C17.2631 5.65362 17.3333 5.82319 17.3333 6C17.3333 6.17681 17.2631 6.34638 17.1381 6.4714C17.013 6.59643 16.8435 6.66667 16.6667 6.66667H3.33333C3.15652 6.66667 2.98695 6.59643 2.86193 6.4714C2.7369 6.34638 2.66667 6.17681 2.66667 6ZM0 0.666667C0 0.489856 0.0702379 0.320287 0.195262 0.195262C0.320286 0.070238 0.489856 0 0.666667 0H14C14.1768 0 14.3464 0.070238 14.4714 0.195262C14.5964 0.320287 14.6667 0.489856 14.6667 0.666667C14.6667 0.843478 14.5964 1.01305 14.4714 1.13807C14.3464 1.2631 14.1768 1.33333 14 1.33333H0.666667C0.489856 1.33333 0.320286 1.2631 0.195262 1.13807C0.0702379 1.01305 0 0.843478 0 0.666667Z"
                className="fill-theme dark:fill-white"
              ></path>
            </svg>
          </div>
        </button>

        <div className="items-center gap-x-16 -mt-0.5 lg:flex hidden">
          <div className="flex items-center gap-x-14 -mb-1.5">
            <LanguageSwitcher />
            {routes.map((route, index) => (
              <Link
                key={index}
                className={`${
                  pathname === route.route
                    ? `text-${oppositeTheme} border-b-blue-growing-active`
                    : `text-gray border-b-blue-growing`
                } transition-all border-b-blue-growing duration-300 font-${font}-regular text-lg`}
                href={route.route}
              >
                {route.title}
              </Link>
            ))}
          </div>

          <Button lang={lang} theme={theme} font={font} />
        </div>
      </div>
    </div>
  );
}
