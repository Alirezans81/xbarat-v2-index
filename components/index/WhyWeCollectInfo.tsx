import { PageProps } from "@/interfaces/PageProps";
import Image from "next/image";
import { ThemeState } from "@/lib/store";
import Security from "@/public/images/index/Privacy/security.png";
export default function WhyWeCollect(props: PageProps) {
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
            Why Do We Collect These
          </span>

          <div className="w-full h-full p-20 grid grid-cols-3 grid-rows-1 gap-x-16">
            <div className="w-full h-full col-span-1 row-span-1 flex justify-start items-center rounded-xl flex-col px-5 py-16 gap-y-16">
              <span
                className={`text-yellow text-center text-5xl font-${font}-bold`}
              >
                Confirm Payments
              </span>
              <span
                className={`text-gray text-3xl text-center font-${font}-regular`}
              >
                We Collect Payments Worldwide Thus We Have To Verify The
                Legality Of These Payments To Ensure Safe Transactions For All
                Users
              </span>
            </div>
            <div className="w-full h-full col-span-1 row-span-1 flex justify-start items-center rounded-xl flex-col px-5 py-16 gap-y-16">
              <span
                className={`text-yellow text-center text-5xl font-${font}-bold`}
              >
                Technical/Financial Support
              </span>
              <span
                className={`text-gray text-3xl text-center font-${font}-regular`}
              >
                Our Support Team Helps Customers To Experience an Easy, Instant
                and Safe Transaction. To Do So We Collect Contact Information To
                Help Make This Possible.
              </span>
            </div>
            <div className="w-full h-full col-span-1 row-span-1 flex justify-start items-center rounded-xl flex-col px-5 py-16 gap-y-16">
              <span
                className={`text-yellow text-center text-5xl font-${font}-bold`}
              >
                Confirm Identities
              </span>
              <span
                className={`text-gray text-3xl text-center font-${font}-regular`}
              >
                Through The Nature Of All Businesses Regarding Currency Exchange
                We Have To Ensure That Our Services Are Not Used To Enable Any
                Case Of Fraud
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
