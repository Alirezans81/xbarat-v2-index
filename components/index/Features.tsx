import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

export default function Features(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  const features = [
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "Sales",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "Onboarding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "Product",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "Quality",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
    },
    {
      icon: require("@/public/images/index/Agencies/pin.png"),
      title: "Result",
      desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
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
      className={`w-full flex flex-col items-center gap-y-10 font-${font}-regular`}
    >
      <div className="w-full flex flex-col items-center gap-y-2 text-center">
        <span
          className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          Make every step user-centric
        </span>
        <span className="text-gray text-xl">
          Lorem ipsum dolor sit amet, consectetur adipis elit
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid-cols-1 flex flex-col gap-y-5 items-center p-[10%] border border-transparent ${
              (index + 1) % getGridCols() === 0 ? "" : "border-r-blue"
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
            <span className={`text-${oppositeTheme} text-xl mt-1`}>
              {feature.title}
            </span>
            <span className="text-gray text-center">{feature.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
