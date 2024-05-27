import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

import MapImage from "@/public/images/index/Map/map.png";
import { Tooltip } from "react-tooltip";

function Marker(
  props: { delay: boolean; id: string; left: number; top: number } & PageProps
) {
  const { font, lang, theme, delay, id, left, top } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  return (
    <div
      className="absolute"
      style={{ left: 47.5 + left / 3.5 + "%", top: 64 - top / 1.7 + "%" }}
    >
      <div className="w-2 h-2 bg-yellow rounded-full relative">
        <div
          className={`absolute w-4 h-4 bg-yellow rounded-full opacity-60 top-[-50%] left-[-50%] animate-pulse-mine ${
            delay ? "animation-delay" : ""
          }`}
        />
        <div
          id={id + "-tooltip"}
          className={`absolute w-6 h-6 bg-yellow rounded-full opacity-30 top-[-50%] left-[-50%] ml-[-50%] mt-[-50%] animate-pulse-mine ${
            delay ? "animation-delay-marker" : ""
          }`}
        />
        <Tooltip
          anchorSelect={`#${id}-tooltip`}
          place="top"
          clickable
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            color: "#2A2B2E",
            zIndex: 100,
          }}
        >
          <div
            className={`flex flex-col items-center gap-y-2 font-${font}-bold`}
          >
            <div className="flex justify-center gap-x-2 items-center border-b border-gray w-full pb-2">
              <Image
                alt="CA"
                src={require("@/public/images/index/Map/ca.png")}
                className="w-6 h-6"
              />
              <span className={`text-${theme} text-center -mb-1`}>Canada</span>
            </div>
            <span className="text-gray max-w-[8rem] text-center mt-2">
              We only work with <span className="text-blue">PayPal</span> in
              this area.
            </span>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default function SupportMap(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  return (
    <section
      id="support-map"
      className={`w-full flex flex-col items-center gap-y-20 font-${font}-regular`}
      style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
    >
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="text-blue text-lg">{lang["index-support-map"]}</div>
        <span
          className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          {lang["index-support-map-title"]}
        </span>
        <span className="text-gray text-xl">
          {lang["index-support-map-desc"]}
        </span>
      </div>

      <div className="relative">
        <div className="opacity-70 absolute z-[0] w-[80%] h-[80%] rounded-full -bottom-40 -left-[90%] light__gradient" />
        <div className="opacity-25 absolute z-[0] w-[50%] h-[50%] -right-[50%] -top-28 blue__gradient" />

        <Image id="map-img" alt="Map" src={MapImage} className="w-full" />

        <Marker
          font={font}
          lang={lang}
          theme={theme}
          id="tooltip1"
          delay={false}
          top={32.4279}
          left={53.688}
        />
        <Marker
          font={font}
          lang={lang}
          theme={theme}
          id="tooltip1"
          delay={false}
          top={33.9391}
          left={67.71}
        />
        <Marker
          font={font}
          lang={lang}
          theme={theme}
          id="tooltip1"
          delay={false}
          top={56.1304}
          left={-106.3468}
        />
        <Marker
          font={font}
          lang={lang}
          theme={theme}
          id="tooltip1"
          delay={false}
          top={37.0902}
          left={-95.7129}
        />
        <Marker
          font={font}
          lang={lang}
          theme={theme}
          id="tooltip1"
          delay={false}
          top={40.0691}
          left={45.0382}
        />
        <Marker
          font={font}
          lang={lang}
          theme={theme}
          id="tooltip1"
          delay={false}
          top={61.524}
          left={105.3188}
        />
      </div>
    </section>
  );
}
