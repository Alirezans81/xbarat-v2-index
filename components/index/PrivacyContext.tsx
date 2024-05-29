import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import { useState } from "react";
export default function PrivacyContext(props: PageProps) {
  const [info, setInfo] = useState("Why");
  const { theme, font, lang } = props;
  const oppositeTheme: string =
    theme == ("dark" as unknown as ThemeState) ? "light" : "dark";
  const context =
    "A privacy policy is a statement or legal document (in privacy law) that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or clients data.1 Personal information can be anything that can be used to identify an individual, not limited to the persons name, address, date of birth, marital status, contact information, ID issue, and expiry date, financial records, credit information, medical history, where one travels, and intentions to acquire goods and services.2 In the case of a business, it is often a statement that declares a partys policy on how it collects, stores, and releases personal information it collects. It informs the client what specific information is collected, and whether it is kept confidential, shared with partners, or sold to other firms or enterprises.34 Privacy policies typically represent a broader, more generalized treatment, as opposed to data use statements, which tend to be more detailed and specific The exact contents of a certain privacy policy will depend upon the applicable law and may need to address requirements across geographical boundaries and legal jurisdictions. Most countries have own legislation and guidelines of who is covered, what information can be collected, and what it can be used for. In general, data protection laws in Europe cover the private sector, as well as the public sector. Their privacy laws apply not only to government operations but also to private enterprises and commercial transactions.";

  return (
    <section className="w-full h-full flex justify-between items-center mt-10 ">
      <div className="w-full h-full flex flex-col relative gap-y-10 sm:gap-y-28 mb-10 lg:mb-0">
        <div className="opacity-20 absolute z-[0] w-[60%] h-[60%] rounded-full top-20 left-10 rtl:right-10 light__gradient" />
        <div className="opacity-65 absolute z-[0] w-[40%] h-[40%] left-28 rtl:right-28 top-48 blue__gradient" />

        <div className="w-full h-full grid grid-cols-12 grid-rows-4 bg-transparent gap-y-5 z-[1] gap-x-5">
          <div className="row-span-4 col-span-4  flex flex-col gap-y-10 bg-dark p-5 rounded-xl">
            <div className="bg-dark-back w-full h-full flex flex-col gap-y-10 rounded-xl p-5 justify-start border-2 border-solid border-light">
              <button
                className={
                  info === "Why"
                    ? `text-dark p-5 rounded-xl text-center text-lg bg-light w-fit  transition-all duration-500`
                    : "text-light text-center text-lg w-fit p-5  transition-all duration-500"
                }
                onClick={() => setInfo("Why")}
              >
                Why We Collect Data
              </button>
              <button
                className={
                  info === "How"
                    ? `text-dark p-5 rounded-xl text-center text-lg bg-light w-fit  transition-all duration-500`
                    : "text-light text-center text-lg w-fit p-5  transition-all duration-500"
                }
                onClick={() => setInfo("How")}
              >
                How We Collect Data
              </button>
              <button
                className={
                  info === "What"
                    ? `text-dark p-5 rounded-xl text-center text-lg bg-light w-fit  transition-all duration-500`
                    : "text-light text-center text-lg w-fit p-5  transition-all duration-500"
                }
                onClick={() => setInfo("What")}
              >
                What Data We Collect
              </button>
              <button
                className={
                  info === "Legal"
                    ? `text-dark p-5 rounded-xl text-center text-lg bg-light w-fit  transition-all duration-500`
                    : "text-light text-center text-lg w-fit p-5  transition-all duration-500"
                }
                onClick={() => setInfo("Legal")}
              >
                Legal Informatioin
              </button>
            </div>
          </div>
          <div className="row-span-4 col-span-8 bg-light p-5 rounded-xl text-xl">
            {context}
          </div>
        </div>
      </div>
    </section>
  );
}
