import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import { useState } from "react";
export default function PrivacyContext(props: PageProps) {
  const [expandContext, setExpandContext] = useState({
    title: 0,
    subTitle: 0,
  });
  const { theme, font, lang } = props;
  const oppositeTheme: string =
    theme === ("dark" as ThemeState["theme"]) ? "light" : "dark";
  const context = lang?.indexPrivacyPolicy || [];
  return (
    <section
      className={`w-full h-full flex justify-between items-center font-${font}-regular lg:min-w-[1280px] pb-3 lg:pb-10`}
    >
      <div className="w-full h-fit flex flex-col relative gap-y-10 sm:gap-y-28 mb-10 lg:mb-0">
        {/* Background Gradients */}
        <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 rtl:right-10 light__gradient" />
        <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-28 rtl:right-28 top-48 blue__gradient" />

        {/* Content Grid */}
        <div
          dir={(font !== "Fa" && font !== "Ar")? "ltr" : "rtl"}
          className={`bg-${theme} p-5 rounded-2xl w-full flex flex-col md:flex-row bg-transparent gap-y-5 z-[1] gap-x-5 h-fit`}
        >
          {/* Title Panel */}
          <div className="min-w-[20rem] flex flex-col gap-y-10 bg-transparent rounded-2xl">
            <div className="w-full h-full flex flex-col gap-y-5 rounded-2xl justify-start">
              {/* Iterate Over Context Sections */}
              {context.map((section: any, titleIndex: number) => (
                <div
                  key={titleIndex}
                  className={`text-${
                    expandContext.title === titleIndex ? oppositeTheme : "gray"
                  } p-5 rounded-xl text-center text-lg bg-${theme}-back w-full flex flex-col gap-y-5 transition-all duration-500`}
                >
                  {/* Title Button */}
                  <button
                    className="w-fit h-fit"
                    onClick={() =>
                      setExpandContext({
                        title: titleIndex,
                        subTitle: 0, // Default to the first subTitle when title is expanded
                      })
                    }
                  >
                    {section.title}
                  </button>

                  {/* SubContent Container */}
                  {expandContext.title === titleIndex && (
                    <div
                      dir={(font !== "Fa" && font !== "Ar")? "ltr" : "rtl"}
       
                      className={`bg-${theme} flex flex-col w-full overflow-hidden text-${oppositeTheme} transition-all duration-300 rounded-2xl p-4 gap-y-3`}
                    >
                      {section.drop.map((sub: any, subIndex: number) => (
                        <button
                          key={subIndex}
                          className={`${
                            expandContext.subTitle === subIndex
                              ? "bg-blue text-light"
                              : "text-gray"
                          } px-5 rounded-2xl transition-all duration-300 py-1`}
                          onClick={() =>
                            setExpandContext({
                              title: titleIndex,
                              subTitle: subIndex,
                            })
                          }
                        >
                          {sub.head}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Context Panel */}
          <div
            className={`flex-1- w-full h-full`}
          >
            <div
              className={
                theme === ("dark" as ThemeState["theme"])
                  ? `bg-${theme}-glass  p-5 rounded-2xl text-xl text-start h-fit w-full animate-appear text-white`
                  : `bg-${theme}-glass  p-5 rounded-2xl text-xl text-start h-fit w-full animate-appear text-black`
              }            
              >
              {
                context[expandContext.title]?.drop[expandContext.subTitle]
                  ?.value || lang['no-data']
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
