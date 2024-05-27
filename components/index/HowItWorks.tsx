import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import { ThemeState } from "@/lib/store";

import Star from "@/public/images/common/star.png";
import Demo from "@/public/images/index/HowItWorks/demo.png";
import Button from "../common/Button";

export default function HowItWorks(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  return (
    <section
      id="how-it-works"
      className="w-full flex justify-between items-center scroll-mt-[50rem]"
    >
      <div className="w-full relative lg:flex hidden">
        <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 rtl:right-10 light__gradient" />
        <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-28 rtl:right-28 top-48 blue__gradient" />

        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine animation-delay hover:animate-none left-[55%] rtl:right-[22.5%] top-[20px] absolute w-[1.75rem] h-[1.75rem] "
        />
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine animation-delay hover:animate-none left-[30%] rtl:right-[50%] bottom-[10px] absolute w-[1rem] h-[1rem] "
        />
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine hover:animate-none left-[5%] rtl:right-[73%] bottom-[-20px] absolute w-[1.5rem] h-[1.5rem] "
        />

        <Image
          alt="Demo"
          src={Demo}
          className="w-[500px] h-[500px] z-[1] object-cover"
        />
      </div>

      <div
        className={`w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-y-5 font-${font}-regular lg:mr-12 mt-10 lg:mt-0`}
        style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
      >
        <div className="w-full flex flex-col items-center lg:items-start gap-y-2">
          <span className={`text-yellow text-2xl`}>
            {lang["index-how-it-works"]}
          </span>
          <span
            className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-start`}
            style={{ lineHeight: "120%" }}
          >
            {lang["index-how-it-works-title"]}
          </span>
        </div>

        <span className="text-gray text-lg text-center sm:text-start">
          {lang["index-how-it-works-desc"]}
        </span>

        <Button font={font} lang={lang} theme={theme} />
      </div>
    </section>
  );
}
