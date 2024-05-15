import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logo.png";
import { ThemeState } from "@/lib/store";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Navbar(
  props: PageProps & {
    routes: any[];
    activeRoute: string;
  }
) {
  const { lang, theme, font, routes, activeRoute } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      console.log(1);
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={`sticky left-0 top-0 w-[100dvw] flex items-center justify-center transition-all duration-500 z-50 ${
        scrollY === 0
          ? "bg-transparent"
          : `bg-${theme}-back shadow-xl shadow-black/5`
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-[1280px] px-[6%] xl:px-0 py-5 ">
        <Link className="flex items-center gap-x-2" href="/">
          <Image src={Logo} className="w-12 h-12" alt="Logo" />
          <div className="flex flex-col -mb-1">
            <span className={`text-yellow-gradient font-${font}-bold text-3xl`}>
              {lang["logo-header"]}
            </span>
            <span
              className={`text-xl text-${oppositeTheme} font-${font}-thin -mt-2`}
            >
              {lang["slogan"]}
            </span>
          </div>
        </Link>

        <div className="items-center gap-x-16 -mt-0.5 lg:flex hidden">
          <div className="flex items-center gap-x-14 -mb-1.5">
            {routes.map((route, index) => (
              <Link
                key={index}
                className={`${
                  activeRoute === route.route
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
    </section>
  );
}
