import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

export default function Features(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";

  const features = [
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: lang["index-features-security-title"],
      desc: lang["index-features-security-desc"],
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: lang["index-features-easy-transfer-title"],
      desc: lang["index-features-easy-transfer-desc"],
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: lang["index-features-high-transaction-speed-title"],
      desc: lang["index-features-high-transaction-speed-desc"],
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: lang["index-features-low-fees-title"],
      desc: lang["index-features-low-fees-desc"],
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: lang["index-features-freedom-of-rate-title"],
      desc: lang["index-features-freedom-of-rate-desc"],
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: lang["index-features-support-languages-title"],
      desc: lang["index-features-support-languages-desc"],
    },
  ];

  const getGridCols = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    } else if (window.innerWidth >= 640) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <section
      id="features"
      className={`w-full flex flex-col items-center gap-y-10 font-${font}-regular`}
    >
      <div
        className={`w-full flex flex-col items-center ${
          font === "Fa" ? "gap-y-4" : "gap-y-2"
        } text-center`}
      >
        <span
          className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
          style={{ lineHeight: "120%" }}
        >
          {lang["index-features-title"]}
        </span>
        <span className="text-gray text-xl">{lang["index-features-desc"]}</span>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid-cols-1 flex flex-col gap-y-5 items-center p-[10%] border border-transparent ${
              (index + 1) % getGridCols() === 0
                ? ""
                : font === "Fa"
                ? "border-l-blue"
                : "border-r-blue"
            } ${
              index <= features.length / getGridCols() &&
              index !== features.length - 1
                ? "border-b-blue"
                : ""
            }`}
          >
            <Image
              alt={feature.title}
              src={feature.icon}
              className="w-10 h-10"
            />
            <span
              className={`text-${oppositeTheme} text-xl mt-1 text-center h-12`}
            >
              {feature.title}
            </span>
            <span className="text-gray text-center">{feature.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
