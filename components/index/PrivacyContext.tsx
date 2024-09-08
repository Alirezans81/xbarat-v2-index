import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import { useEffect, useState } from "react";
export default function PrivacyContext(props: PageProps) {
  const [expandContext, setExpandContext] = useState({
    title: 0,
    subTitle: 0,
  });
  const { theme, font, lang } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";
  const context = lang?.indexPrivacyPolicy || {};
  return (
    <section
      className={`w-full h-full flex justify-between items-center font-${font}-regular`}
    >
      <div className="w-full h-full flex flex-col relative gap-y-10 sm:gap-y-28 mb-10 lg:mb-0 ">
        <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 rtl:right-10 light__gradient" />
        <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-28 rtl:right-28 top-48 blue__gradient" />

        <div
          dir={font !== "Fa" ? "ltr" : "rtl"}
          className={` bg-${theme} p-5 rounded-2xl w-full h-full grid grid-cols-12 grid-rows-4 bg-transparent gap-y-5 z-[1] gap-x-5`}
        >
          <div className=" row-span-1 md:row-span-4 col-span-12 md:col-span-4  flex flex-row md:flex-col gap-y-10 bg-transparent rounded-2xl">
            <div className="w-full h-full flex flex-col gap-y-5 rounded-2xl justify-start">
              {/* Why Part */}
              <div
                className={
                  expandContext.title === 0
                    ? `text-${oppositeTheme} p-5 rounded-xl text-center text-lg bg-${theme}-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : `text-gray text-center text-lg w-full rounded-2xl p-5 bg-${theme}-back transition-all duration-500 h-fit`
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: 0,
                      subTitle: 0,
                    })
                  }
                >
                  {context[0]?.title}
                </button>
                <div className="w-full h-full flex justify-center">
                  <div
                    className={
                      expandContext.title === 0
                        ? `bg-${theme} flex  w-full h-fit justify-center items-start flex-col text-${oppositeTheme} transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === 0
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 0,
                          subTitle: 0,
                        })
                      }
                    >
                      {context[0]?.drop[0]?.head}
                    </button>
                    <button
                      className={
                        expandContext.subTitle === 1
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 0,
                          subTitle: 1,
                        })
                      }
                    >
                      {context[0]?.drop[1]?.head}
                    </button>
                    <button
                      className={
                        expandContext.subTitle === 2
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 0,
                          subTitle: 2,
                        })
                      }
                    >
                      {context[0]?.drop[2]?.head}
                    </button>
                  </div>
                </div>
              </div>
              {/* How Part */}
              <div
                className={
                  expandContext.title === 1
                    ? `text-${oppositeTheme} p-5 rounded-xl text-center text-lg bg-${theme}-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : `text-gray text-center text-lg w-full rounded-2xl p-5 bg-${theme}-back  transition-all duration-500 h-fit`
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: 1,
                      subTitle: 0,
                    })
                  }
                >
                  {context[1]?.title}
                </button>
                <div className="w-full h-fit flex justify-center">
                  <div
                    className={
                      expandContext.title === 1
                        ? `bg-${theme} flex  w-full h-full justify-center items-start flex-col text-${oppositeTheme} transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === 0
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 1,
                          subTitle: 0,
                        })
                      }
                    >
                      {context[1]?.drop[0]?.head}
                    </button>
                    <button
                      className={
                        expandContext.subTitle === 1
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 1,
                          subTitle: 1,
                        })
                      }
                    >
                      {context[1]?.drop[1]?.head}
                    </button>
                  </div>
                </div>
              </div>
              {/* What Part */}
              <div
                className={
                  expandContext.title === 2
                    ? `text-${oppositeTheme} p-5 rounded-2xl text-center text-lg bg-${theme}-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : `text-gray text-center text-lg w-full rounded-2xl p-5 bg-${theme}-back  transition-all duration-500 h-fit`
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: 2,
                      subTitle: 0,
                    })
                  }
                >
                  {context[2]?.title}
                </button>
                <div className="w-full h-full flex justify-center">
                  <div
                    className={
                      expandContext.title === 2
                        ? `bg-${theme} flex  w-full h-fit justify-center items-start flex-col text-${oppositeTheme} transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === 0
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 2,
                          subTitle: 0,
                        })
                      }
                    >
                      {context[2]?.drop[0]?.head}
                    </button>
                    <button
                      className={
                        expandContext.subTitle === 1
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 2,
                          subTitle: 1,
                        })
                      }
                    >
                      {context[2]?.drop[1]?.head}
                    </button>

                    <button
                      className={
                        expandContext.subTitle === 2
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 py-1`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: 2,
                          subTitle: 2,
                        })
                      }
                    >
                      {context[2]?.drop[2]?.head}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`row-span-3 col-span-12 md:row-span-4 md:col-span-8 `}
          >
            <div
              className={
                theme === ("dark" as ThemeState["theme"])
                  ? `bg-${theme}-glass  p-5 rounded-2xl text-xl text-start h-fit w-fit animate-appear text-white`
                  : `bg-${theme}-glass  p-5 rounded-2xl text-xl text-start h-fit w-fit animate-appear text-black`
              }
            >
              {
                context[expandContext.title]?.drop[expandContext.subTitle]
                  ?.value
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
