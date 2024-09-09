"use client";

import { PageProps } from "@/interfaces/PageProps";
import { ThemeState, useRouteStore } from "@/lib/store";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { slide as Slide } from "react-burger-menu";
import { Styles } from "react-burger-menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { Tooltip } from "react-tooltip";

export default function SlideMenu(
  props: PageProps & {
    isOpen: boolean;
    onClose: () => void;
  }
) {
  const { theme, onClose, isOpen, font, lang } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";
  const routes = useRouteStore((state) => state.routes);
  const pathname = usePathname();

  const SliderMenuStyles: Styles = {
    bmBurgerButton: {
      backgroundColor: "#fff",
      display: "hidden",
      width: "1px",
      height: "1px",
      position: "absolute",
      left: "-10px",
      top: "-10px",
      opacity: "0",
    },
    bmBurgerBars: {
      backgroundColor: "#fff",
      display: "hidden",
      width: "1px",
      height: "1px",
      position: "absolute",
      left: "-10px",
      top: "-10px",
      opacity: "0",
    },
    bmCrossButton: {
      padding: "20px",
      background: "#283236",
      borderRadius: "100%",
      right: font === "Fa" ? "75%" : "6%",
      top: "15px",
    },
    bmCross: {
      background: "#F2F5F8",
      position: "absolute",
      right: "5px",
      top: "7px",
    },
    bmMenuWrap: {},
    bmMenu: {
      background: "#171d20",
      padding: "2.5em 1rem 0rem",
      fontSize: "1.15em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    bmMorphShape: {
      fill: "#171d20",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Slide
      width={"200px"}
      right={font !== "Fa"}
      isOpen={isOpen}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      onClose={onClose}
      styles={SliderMenuStyles}
    >
      <div className="w-full h-full flex flex-col justify-between relative">
        <div
          dir={font === "Fa" ? "rtl" : "ltr"}
          className="absolute start-0 -top-10 z-[500]"
        >
          <LanguageSwitcher />
        </div>

        <div dir={font === "Fa" ? "rtl" : "ltr"} className="">
          <span className="text-snowWhite font-medium text-lg">
            {lang["index-menu"]}
          </span>
          <div className="w-full flex flex-col gap-y-4 mt-7">
            {routes.map((route, index) => (
              <Link
                key={index}
                className={`${
                  pathname === route.route
                    ? `text-${oppositeTheme} border-b-blue-growing-active`
                    : `text-gray border-b-blue-growing`
                } transition-all border-b-blue-growing duration-300 w-fit font-${font}-regular text-lg`}
                href={route.route}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>

        <div
          dir={font === "Fa" ? "rtl" : "ltr"}
          className="absolute bottom-2.5"
        >
          <span className="text-snowWhite font-medium text-lg">
            {lang["index-get-in-touch"]}
          </span>
          <div className="flex flex-wrap gap-y-4 gap-x-3.5 items-center py-1 mt-2.5">
            <Link
              id="instgram-link"
              href="https://www.instagram.com/xbarat.team?igsh=MXEzZTRucjBybmx5Zw=="
            >
              <Image
                alt="Instagram"
                src={require("@/public/images/index/Footer/instagram.png")}
                className="w-8 h-8"
              />
            </Link>
            <Tooltip
              anchorSelect="#instgram-link"
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                color: "#2A2B2E",
                zIndex: 100,
                backdropFilter: "none",
              }}
            >
              {lang["index-instagram"]}
            </Tooltip>

            <Link id="telegram-link" href="https://t.me/xbaratteam_rate">
              <Image
                alt="Telegram"
                src={require("@/public/images/index/Footer/telegram.png")}
                className="w-8 h-8"
              />
            </Link>
            <Tooltip
              anchorSelect="#telegram-link"
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                color: "#2A2B2E",
                zIndex: 100,
                backdropFilter: "none",
              }}
            >
              {lang["index-telegram"]}
            </Tooltip>

            <Link id="whats-app-link" href="https://wa.me/989360758639">
              <Image
                alt="WhatsApp"
                src={require("@/public/images/index/Footer/whats-app.png")}
                className="w-8 h-8"
              />
            </Link>
            <Tooltip
              anchorSelect="#whats-app-link"
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                color: "#2A2B2E",
                zIndex: 100,
                backdropFilter: "none",
              }}
            >
              {lang["index-whats-app"]}
            </Tooltip>

            <Link
              id="x-link"
              href="https://x.com/xbaratteam?t=KcuxFsnaTcYGAeKeSBg9EA&s=09"
            >
              <Image
                alt="X"
                src={require("@/public/images/index/Footer/x.png")}
                className="w-8 h-8"
              />
            </Link>
            <Tooltip
              anchorSelect="#x-link"
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                color: "#2A2B2E",
                zIndex: 100,
                backdropFilter: "none",
              }}
            >
              {lang["index-x"]}
            </Tooltip>

            <Link
              id="facebook-link"
              href="https://www.facebook.com/xbarat.team?mibextid=ZbWKwL"
            >
              <Image
                alt="Facebook"
                src={require("@/public/images/index/Footer/facebook.png")}
                className="w-8 h-8"
              />
            </Link>
            <Tooltip
              anchorSelect="#facebook-link"
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                color: "#2A2B2E",
                zIndex: 100,
                backdropFilter: "none",
              }}
            >
              {lang["index-facebook"]}
            </Tooltip>
          </div>
        </div>
      </div>
    </Slide>
  );
}
