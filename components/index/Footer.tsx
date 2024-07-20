import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logo.png";
import Enamad from "@/public/images/common/enamad.png";
import GooglePlay from "@/public/images/common/google-play-badge.png";

export default function Footer(props: PageProps) {
  const { theme, lang, font } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";

  return (
    <footer
      className={`w-full bg-${theme}-back font-${font}-regular`}
      style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
    >
      <div className="grid grid-cols-12 xl:grid-cols-11 gap-5 max-w-[1280px] px-[7%] xl:px-0 py-6 mx-auto">
        <Link
          referrerPolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=485357&Code=LwgyTn9VytoW36GtaupWwoB5FScOJM8v"
          className={`col-span-5 md:col-span-3 xl:col-span-2 hidden sm:flex justify-center items-center bg-${theme}-mahtisa rounded-xl p-3`}
        >
          <Image
            width={220}
            referrerPolicy="origin"
            className="bg-theme"
            src={Enamad}
            alt="Enamad"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <div
          className={`col-span-12 sm:col-span-7 md:col-span-3 w-full bg-${theme}-mahtisa rounded-xl p-5 flex md:hidden xl:flex flex-col gap-y-5 md:gap-y-2`}
        >
          <span
            className={`text-${oppositeTheme} text-xl md:text-2xl leading-8 font-${font}-bold`}
            style={{
              direction: font === "Fa" ? "rtl" : "ltr",
              textAlign: "start",
            }}
          >
            {lang["index-footer-trust-title-1"] + " "}
            <span className="text-blue">
              {lang["index-footer-trust-title-2"] + " "}
            </span>
            {lang["index-footer-trust-title-3"]}
          </span>
          <span className={`flex-1 text-gray`}>
            {lang["index-footer-trust-desc"]}
          </span>
          {/* <span className={`text-${oppositeTheme} -mb-2`}>
            {lang["index-footer-trust-bottom"]}
          </span> */}
        </div>

        <div
          className={`col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 flex flex-col gap-y-3 bg-${theme}-mahtisa p-5 rounded-xl text-gray`}
        >
          <span
            className={`text-blue font-${font}-bold text-lg`}
            style={{
              direction: font === "Fa" ? "rtl" : "ltr",
              textAlign: "start",
            }}
          >
            {lang["index-product"]}
          </span>
          <div className="flex flex-col gap-y-1.5">
            <Link
              href={"/#how-it-works"}
              className={`transition-all duration-300 text-hover-${oppositeTheme}`}
            >
              {lang["index-how-it-works"]}
            </Link>
            <Link
              href={"/#features"}
              className={`transition-all duration-300 text-hover-${oppositeTheme}`}
            >
              {lang["index-features"]}
            </Link>
            <Link
              href={"/#social-media"}
              className={`transition-all duration-300 text-hover-${oppositeTheme}`}
            >
              {lang["index-social-media"]}
            </Link>
            <Link
              href={"/#journey"}
              className={`transition-all duration-300 text-hover-${oppositeTheme}`}
            >
              {lang["index-journey"]}
            </Link>
            <Link
              href={"/#support-map"}
              className={`transition-all duration-300 text-hover-${oppositeTheme}`}
            >
              {lang["index-support-map"]}
            </Link>
          </div>
        </div>

        <div
          className={`col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 flex flex-col gap-y-3 bg-${theme}-mahtisa p-5 rounded-xl text-gray`}
        >
          <span
            className={`text-blue font-${font}-bold text-lg`}
            style={{
              direction: font === "Fa" ? "rtl" : "ltr",
              textAlign: "start",
            }}
          >
            {lang["index-trust"]}
          </span>
          <div className="flex flex-col gap-y-1.5">
            <Link
              href={"/#how-it-works"}
              className={`transition-all duration-300 text-hover-${oppositeTheme}`}
            >
              {lang["index-privacy-&-policy"]}
            </Link>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2 flex flex-col gap-y-5">
          <div
            className={`flex-1 flex flex-col bg-${theme}-mahtisa p-5 rounded-xl w-full`}
          >
            <span
              className={`text-blue font-${font}-bold text-lg`}
              style={{
                direction: font === "Fa" ? "rtl" : "ltr",
                textAlign: "start",
              }}
            >
              {lang["index-social-links"]}
            </span>
            <div className="flex items-center gap-x-2"></div>
          </div>
          <div
            className={`flex-1 flex justify-center items-center bg-${theme}-mahtisa rounded-xl w-full`}
          >
            <Link href="https://play.google.com/store/apps/details?id=com.XBARAT.XBARAT&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <Image
                alt="Get it on Google Play"
                src={GooglePlay}
                className="w-full"
              />
            </Link>
          </div>
        </div>

        <Link
          referrerPolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=485357&Code=LwgyTn9VytoW36GtaupWwoB5FScOJM8v"
          className={`col-span-6 md:col-span-3 xl:col-span-2 flex sm:hidden justify-center items-center bg-${theme}-mahtisa rounded-xl p-3`}
        >
          <Image
            width={220}
            referrerPolicy="origin"
            className="bg-theme"
            src={Enamad}
            alt="Enamad"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <span className="col-span-12 text-center text-gray">
          {lang["index-copyright"]}
        </span>
      </div>
    </footer>
  );
}
