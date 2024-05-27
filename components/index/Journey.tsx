import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

export default function Journey(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  const steps = [
    {
      icon: require("@/public/images/index/Journey/step1.png"),
      title: lang['index-journey-step-1-title'],
      desc: lang['index-journey-step-1-desc'],
    },
    {
      icon: require("@/public/images/index/Journey/step1.png"),
      title: lang['index-journey-step-2-title'],
      desc: lang['index-journey-step-2-desc'],
    },
    {
      icon: require("@/public/images/index/Journey/step1.png"),
      title: lang['index-journey-step-3-title'],
      desc: lang['index-journey-step-3-desc'],
    },
    {
      icon: require("@/public/images/index/Journey/step1.png"),
      title: lang['index-journey-step-4-title'],
      desc: lang['index-journey-step-4-desc'],
    },
  ];

  return (
    <section
      id="journey"
      className={`w-full flex flex-col items-center gap-y-10 font-${font}-regular`}
      style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
    >
      <div className="w-full flex flex-col items-center gap-y-4 text-center">
        <span
          className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          {lang["index-journey-title"]}
        </span>
        <div className="flex flex-col items-center text-gray text-xl">
          <span>{lang["index-journey-desc-1"]}</span>
          <span>{lang["index-journey-desc-2"]}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`col-span-1 h-full text-center flex flex-col items-center gap-y-3 border border-blue rounded-xl p-7`}
          >
            <span
              className={`text-${oppositeTheme} w-full text-xl font-${font}-bold`}
              style={{
                direction: font === "Fa" ? "rtl" : "ltr",
                textAlign: "start",
              }}
            >
              {"0" + (index + 1)}
            </span>
            <Image alt={step.title} src={step.icon} className="w-20 h-20" />
            <span className={`text-${oppositeTheme} text-xl mt-2`}>
              {step.title}
            </span>
            <span className="text-gray text-center">{step.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
