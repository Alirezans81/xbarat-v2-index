import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import { ThemeState } from "@/lib/store";
import { TypeAnimation } from "react-type-animation";

import Star from "@/public/images/common/star.png";
import HeroPhoto from "@/public/images/index/Hero/hero.png";

import ArrowRight from "@/public/images/index/Hero/arrowRight.png";
import ArrowRightDark from "@/public/images/index/Hero/arrowRightDark.png";
import ArrowLeft from "@/public/images/index/Hero/arrowLeft.png";
import ArrowLeftDark from "@/public/images/index/Hero/arrowLeftDark.png";

import Button from "../common/Button";

export default function Hero(props: PageProps) {
  const { theme, font, lang } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  const typingAnimtionDuration: number = 300;
  const showTypingAnimtionDuration: number = 1000;

  return (
    <section className="w-full flex justify-between items-center mt-10">
      <div className="w-full flex flex-col relative gap-y-10 sm:gap-y-28 mb-10 lg:mb-0">
        <Image
          alt="Arrow"
          src={
            font === "Fa" && theme === "dark"
              ? ArrowRight
              : font === "Fa" && theme === "light"
              ? ArrowRightDark
              : font !== "Fa" && theme === "light"
              ? ArrowLeftDark
              : ArrowLeft
          }
          className={`z-[2] absolute sm:top-24 transition-all duration-300
          rtl:-rotate-3 rtl:hover:-rotate-12 rtl:sm:left-36 rtl:left-5 rtl:sm:top-28 rtl:top-20
          rotate-3 hover:rotate-12 sm:left-72 left-44 top-20
          w-[150px] sm:w-auto`}
        />
        <div className="opacity-70 absolute z-[0] w-[80%] h-[80%] rounded-full top-0 left-0 light__gradient" />
        <div className="opacity-35 absolute z-[0] w-[50%] h-[50%] left-20 top-0 blue__gradient" />

        <TypeAnimation
          sequence={[
            lang["slogan"] + ".", // Types 'One'
            showTypingAnimtionDuration,
            () => {},
            lang["slogan"] + "..", // Types 'Two'
            showTypingAnimtionDuration,
            () => {},
            lang["slogan"] + "...", // Types 'Three'
            showTypingAnimtionDuration,
            () => {},
            "", // Types 'One'
            typingAnimtionDuration,
            () => {},
          ]}
          speed={50}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          style={{
            textAlign: "start",
            direction: font === "Fa" ? "rtl" : "ltr",
          }}
          className={`z-[1] sm:max-w-[30rem] rtl:sm:max-w-[32rem] text-5xl sm:text-7xl h-[11rem] leading-[3.5rem] sm:leading-[5rem] flex flex-col text-${oppositeTheme} font-${font}-regular`}
        />

        <div className="flex flex-col gap-y-5 z-[1]">
          <span
            className={`text-gray font-${font}-regular text-lg`}
            style={{
              textAlign: "start",
              direction: font === "Fa" ? "rtl" : "ltr",
            }}
          >
            {lang["index-xbarat-desc"]}
          </span>
          <Button font={font} lang={lang} theme={theme} />
        </div>
      </div>

      <div className="w-full relative z-[1] ml-20 hidden lg:block">
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine animation-delay hover:animate-none left-[65%] top-[40px] absolute w-[2.7rem] h-[2.7rem] "
        />
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine hover:animate-none left-[85%] bottom-[120px] absolute w-14 h-14 "
        />
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine hover:animate-none left-[5%] bottom-[35%] absolute w-8 h-8 "
        />
        <Image
          alt="Hero Photo"
          src={HeroPhoto}
          className="w-[500px] xlg:w-[600px] h-[500px] xlg:h-[600px] object-cover z-[1]"
        />
      </div>
    </section>
  );
}
