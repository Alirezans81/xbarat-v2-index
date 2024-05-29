import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import { ThemeState } from "@/lib/store";
import User from "@/public/images/index/Privacy/user.png";
import Money from "@/public/images/index/Privacy/money.png";
import Globe from "@/public/images/index/Privacy/globe.png";
export default function InfoWeCollect(props: PageProps) {
  const { theme, font, lang } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";

  return (
    <section className="w-full h-full flex justify-between items-center mt-10 ">
      <div className="w-full h-full flex flex-col relative gap-y-10 sm:gap-y-28 mb-10 lg:mb-0">
        <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 rtl:right-10 light__gradient" />
        <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-28 rtl:right-28 top-48 blue__gradient" />

        <div className="w-full h-full flex justify-center items-center flex-col gap-y-5 z-[1]">
          <span
            className={`text-${oppositeTheme} font-${font}-regular text-8xl text-center`}
            style={{
              direction: font === "Fa" ? "rtl" : "ltr",
            }}
          >
            The Information We Collect
          </span>
          <div className="w-1/3 h-full flex justify-center items-center">
            <span
              className={`text-gray font-${font}-regular text-2xl text-center`}
              style={{
                direction: font === "Fa" ? "rtl" : "ltr",
              }}
            >
              We thorugh the nature of financial businesses have to collect
              certain information to provide a safe and secure platform
            </span>
          </div>
          <div className="w-full h-full p-20 grid grid-cols-3 grid-rows-1 gap-x-5">
            <div className="w-full h-full col-span-1 row-span-1 border-solid border-2 border-blue flex justify-start items-center rounded-xl flex-col px-5 py-16 gap-y-16">
              <Image alt="" src={User} />
              <span
                className={`text-yellow text-center text-3xl font-${font}-regular`}
              >
                Personal Information
              </span>
              <span
                className={`text-gray text-2xl text-center font-${font}-regular`}
              >
                Name, email address and phone number
              </span>
            </div>
            <div className="w-full h-full col-span-1 row-span-1 border-solid border-2 border-blue flex justify-start items-center rounded-xl flex-col px-5 py-16 gap-y-16">
              <Image alt="" src={Money} />
              <span
                className={`text-yellow text-center text-3xl font-${font}-regular`}
              >
                Personal Information
              </span>
              <span
                className={`text-gray text-2xl text-center font-${font}-regular`}
              >
                Name, email address and phone number
              </span>
            </div>
            <div className="w-full h-full col-span-1 row-span-1 border-solid border-2 border-blue flex justify-start items-center rounded-xl flex-col px-5 py-16 gap-y-16">
              <Image alt="" src={Globe} />
              <span
                className={`text-yellow text-center text-3xl font-${font}-regular`}
              >
                Personal Information
              </span>
              <span
                className={`text-gray text-2xl text-center font-${font}-regular`}
              >
                Name, email address and phone number
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
