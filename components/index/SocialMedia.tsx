import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

import Star from "@/public/images/common/star.png";
import Mockup from "@/public/images/index/SocialMedia/mockup.png";
import Rings from "@/public/images/index/SocialMedia/rings.png";

export default function SocialMedia(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  const socialMediaFeatures = [
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "budgeting intervals",
      desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "budgeting intervals",
      desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "budgeting intervals",
      desc: "Lorem ipsum dolor sit amet. Qui consequatur sint 33 voluptatem officia et sint laboriosam sed ipsa sint ut voluptatum labore et.",
    },
  ];

  return (
    <section className="w-full flex items-center">
      <div className="w-full lg:block hidden">
        <div className="relative w-[500px] h-[500px]">
          <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 light__gradient" />
          <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-40 top-40 blue__gradient" />

          <Image
            alt="star"
            src={Star}
            className="animate-pulse-mine hover:animate-none left-[80%] top-[40px] absolute w-[1.75rem] h-[1.75rem] "
          />
          <Image
            alt="star"
            src={Star}
            className="animate-pulse-mine  hover:animate-none left-[0%] bottom-[200px] absolute w-[1.25rem] h-[1.25rem] "
          />
          <Image
            alt="star"
            src={Star}
            className="animate-pulse-mine animation-delay hover:animate-none left-[90%] bottom-[70px] absolute w-[1rem] h-[1rem] "
          />

          <Image
            alt="Rings"
            src={Rings}
            className="w-[130%] h-[130%] object-cover absolute z-[1] -top-24"
          />
          <Image
            alt="Instagram Mockup"
            src={Mockup}
            className="w-full h-full object-cover absolute z-[2]"
          />
        </div>
      </div>

      <div
        className={`w-full flex flex-col gap-y-5 font-${font}-regular ml-0 lg:ml-20`}
      >
        <div className="flex flex-col items-center lg:items-start gap-y-2">
          <span className={`text-yellow text-xl lg:text-2xl`}>
            Social Media
          </span>
          <span
            className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[33rem]`}
          >
            Crypto premium
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row lg:flex-col gap-8 mt-5 text-center md:text-left">
          {socialMediaFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-y-3"
            >
              <div className="flex flex-row gap-x-2 items-center">
                <Image
                  alt={feature.title}
                  src={feature.icon}
                  className="w-5 h-5"
                />
                <span className={`text-${oppositeTheme} text-lg -mb-1`}>
                  {feature.title}
                </span>
              </div>
              <span className="text-gray">{feature.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
