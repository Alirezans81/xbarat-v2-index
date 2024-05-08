import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import { ThemeState } from "@/lib/store";
import { TypeAnimation } from "react-type-animation";

import Star from "@/public/images/common/star.png";
import HeroPhoto from "@/public/images/index/Hero/hero.png";
import Arrow from "@/public/images/index/Hero/arrow.png";
import Button from "../common/Button";

export default function Hero(props: PageProps) {
  const { theme, font, lang } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  const typingAnimtionDuration: number = 300;
  const showTypingAnimtionDuration: number = 1000;

  return (
    <section className="w-full flex justify-between items-center mt-10">
      <div className="w-full flex flex-col relative gap-y-28">
        <Image
          alt="Arrow"
          src={Arrow}
          className="z-[2] absolute left-72 top-24 transition-all duration-300 rotate-3 hover:rotate-12"
        />
        <div className="opacity-70 absolute z-[0] w-[80%] h-[80%] rounded-full top-0 left-0 light__gradient" />
        <div className="opacity-35 absolute z-[0] w-[50%] h-[50%] left-20 top-0 blue__gradient" />

        <TypeAnimation
          sequence={[
            "When you are enough.", // Types 'One'
            showTypingAnimtionDuration,
            () => {},
            "When you are enough..", // Types 'One'
            showTypingAnimtionDuration,
            () => {},
            "When you are enough...", // Types 'One'
            showTypingAnimtionDuration,
            () => {},
            "", // Types 'One'
            typingAnimtionDuration,
            () => {},
          ]}
          speed={50}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className={`z-[1] w-[28rem] text-[400%] h-[11rem] leading-[5rem] flex flex-col text-${oppositeTheme} tracking-wide font-${font}-regular`}
        />

        <div className="flex flex-col gap-y-5 z-[1]">
          <span className={`text-gray font-${font}-regular text-lg`}>
            A peer to peer exchange & transfer national currencies platform. We
            connect people, not Intermediation.
          </span>
          <div className="w-40">
            <Button font={font} lang={lang} theme={theme} />
          </div>
        </div>
      </div>

      <div className="w-full relative z-[1] ml-20">

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
