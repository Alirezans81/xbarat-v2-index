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
    <section className="w-full flex justify-between items-center">
      <div className="w-full flex relative my-16">
        <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 light__gradient" />
        <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-28 top-48 blue__gradient" />

        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine animation-delay hover:animate-none left-[55%] top-[30px] absolute w-[1.75rem] h-[1.75rem] "
        />
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine animation-delay hover:animate-none left-[30%] bottom-[20px] absolute w-[1rem] h-[1rem] "
        />
        <Image
          alt="star"
          src={Star}
          className="animate-pulse-mine hover:animate-none left-[5%] bottom-[-20px] absolute w-[1.5rem] h-[1.5rem] "
        />

        <Image
          alt="Demo"
          src={Demo}
          className="w-[600px] h-[600px] z-[1] object-cover -ml-16"
        />
      </div>

      <div
        className={`w-full flex flex-col gap-y-5 font-${font}-regular mr-12`}
      >
        <div className="flex flex-col gap-y-2">
          <span className={`text-yellow text-2xl`}>How It Works</span>
          <span className={`text-${oppositeTheme} text-6xl max-w-[33rem]`}>
            Send abroad your money - Using connecting people
          </span>
        </div>

        <span className="text-gray text-lg">
          Instead of sending the actual money, we connect people on opposite
          sides. By using this idea, currency is not transferred between
          countries and the fee is also lower.
        </span>

        <div className="w-40">
          <Button font={font} lang={lang} theme={theme} />
        </div>
      </div>
    </section>
  );
}
