import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

import Star from "@/public/images/common/star.png";
import Mockup from "@/public/images/index/SocialMedia/mockup.png";
import Rings from "@/public/images/index/SocialMedia/rings.png";

export default function SocialMedia(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";

  const socialMediaFeatures = [
    {
      icon: require("@/public/images/index/Features/pin.png"),
      title: lang["index-social-media-desc-1-title"],
      desc: lang["index-social-media-desc-1-desc"],
    },
    {
      icon: require("@/public/images/index/Features/pin.png"),
      title: lang["index-social-media-desc-2-title"],
      desc: lang["index-social-media-desc-2-desc"],
    },
    {
      icon: require("@/public/images/index/Features/pin.png"),
      title: lang["index-social-media-desc-3-title"],
      desc: lang["index-social-media-desc-3-desc"],
    },
  ];

  return (
    <section id="social-media" className="w-full flex items-center">
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
        style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
      >
        <div className="flex flex-col items-center lg:items-start gap-y-2">
          <span className={`text-yellow text-xl lg:text-2xl`}>
            {lang["index-social-media"]}
          </span>
          <span
            className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:text-start`}
          >
            {lang["index-social-media-title"]}
          </span>
        </div>

        <div className="w-full flex flex-col md:flex-row lg:flex-col gap-8 mt-5 text-center md:text-left">
          {socialMediaFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start gap-y-3"
              style={{
                direction: font === "Fa" ? "rtl" : "ltr",
                textAlign: "start",
              }}
            >
              <div className="flex flex-row justify-center lg:justify-start w-full gap-x-2 items-center">
                <Image
                  alt={feature.title}
                  src={feature.icon}
                  className="w-5 h-5"
                />
                <span
                  className={`text-${oppositeTheme} text-lg leading-5 text-center w-max ${
                    font === "Fa" ? "" : "-mb-1"
                  }`}
                >
                  {feature.title}
                </span>
              </div>
              <span className="text-gray text-center lg:text-start">
                {feature.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
