import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";
import { Tooltip } from "react-tooltip";

import MapImage from "@/public/images/index/Map/map.png";

function Marker(props: { delay: boolean; id: string } & PageProps) {
  const { font, lang, theme, delay, id } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  return (
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
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          color: "#2A2B2E",
          zIndex: 100,
        }}
      >
        <div className={`flex flex-col items-center gap-y-2 font-${font}-bold`}>
          <div className="flex justify-center gap-x-2 items-center border-b border-gray w-full pb-2">
            <Image
              alt="CA"
              src={require("@/public/images/index/Map/ca.png")}
              className="w-6 h-6"
            />
            <span className={`text-${theme} text-center -mb-1`}>Canada</span>
          </div>
          <span className="text-gray max-w-[8rem] text-center mt-2">
            We only work with <span className="text-blue">PayPal</span> in this
            area.
          </span>
        </div>
      </Tooltip>
    </div>
  );
}

export default function Map(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  return (
    <section
      className={`w-full flex flex-col items-center gap-y-20 font-${font}-regular`}
    >
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="text-blue text-lg">About us</div>
        <span
          className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          We’re a distributed team
        </span>
        <span className="text-gray text-xl">
          We have offices and teams all around the world.
        </span>
      </div>

      <div className="relative">
        <div className="opacity-70 absolute z-[0] w-[80%] h-[80%] rounded-full -bottom-40 -left-[90%] light__gradient" />
        <div className="opacity-25 absolute z-[0] w-[50%] h-[50%] -right-[50%] -top-28 blue__gradient" />

        <Image alt="Map" src={MapImage} className="w-full" />

        <div className="absolute left-[64%] top-[45%]">
          <Marker
            font={font}
            lang={lang}
            theme={theme}
            id="tooltip1"
            delay={false}
          />
        </div>
        <div className="absolute left-[68%] top-[42%]">
          <Marker font={font} lang={lang} theme={theme} id="tooltip2" delay />
        </div>
        <div className="absolute left-[18%] top-[25%]">
          <Marker
            font={font}
            lang={lang}
            theme={theme}
            id="tooltip3"
            delay={false}
          />
        </div>
      </div>
    </section>
  );
}
