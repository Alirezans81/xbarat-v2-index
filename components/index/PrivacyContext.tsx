import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import { useState } from "react";
export default function PrivacyContext(props: PageProps) {
  const [expandContext, setExpandContext] = useState({
    title: "Why",
    subTitle: "ValidateTransaction",
  });
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

        <div className=" bg-dark p-5 rounded-2xl w-full h-full grid grid-cols-12 grid-rows-4 bg-transparent gap-y-5 z-[1] gap-x-5">
          <div className="row-span-4 col-span-4  flex flex-col gap-y-10 bg-transparent rounded-2xl">
            <div className="w-full h-full flex flex-col gap-y-5 rounded-2xl  justify-start">
              {/* Why Part */}
              <div
                className={
                  expandContext.title === "Why"
                    ? `text-light p-5 rounded-xl text-center text-lg bg-dark-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : "text-gray text-center text-lg w-full rounded-2xl p-5 bg-dark-back  transition-all duration-500"
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: "Why",
                      subTitle: "",
                    })
                  }
                >
                  Why We Collect Data
                </button>
                <div className="w-full h-full flex justify-center">
                  <div
                    className={
                      expandContext.title === "Why"
                        ? `bg-dark flex  w-full h-full justify-center items-start flex-col text-light transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === "ValidateTransaction"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300 w-fit h-fit`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Why",
                          subTitle: "ValidateTransaction",
                        })
                      }
                    >
                      Validate Transaction
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "Marketing"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Why",
                          subTitle: "Marketing",
                        })
                      }
                    >
                      Marketing
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "ValidateIdentity"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Why",
                          subTitle: "ValidateIdentity",
                        })
                      }
                    >
                      Validate Identity
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "Support"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Why",
                          subTitle: "Support",
                        })
                      }
                    >
                      Support
                    </button>
                  </div>
                </div>
              </div>
              {/* How Part */}
              <div
                className={
                  expandContext.title === "How"
                    ? `text-light p-5 rounded-xl text-center text-lg bg-dark-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : "text-gray text-center text-lg w-full rounded-2xl p-5 bg-dark-back  transition-all duration-500"
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: "How",
                      subTitle: "",
                    })
                  }
                >
                  How Do We Collect Data
                </button>
                <div className="w-full h-full flex justify-center">
                  <div
                    className={
                      expandContext.title === "How"
                        ? `bg-dark flex  w-full h-full justify-center items-start flex-col text-light transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === "PersonalData"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "How",
                          subTitle: "PersonalData",
                        })
                      }
                    >
                      Personal Data
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "TransactionRecipts"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "How",
                          subTitle: "TransactionRecipts",
                        })
                      }
                    >
                      Transaction Recipts
                    </button>
                  </div>
                </div>
              </div>
              {/* What Part */}
              <div
                className={
                  expandContext.title === "What"
                    ? `text-light p-5 rounded-2xl text-center text-lg bg-dark-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : "text-gray text-center text-lg w-full rounded-2xl p-5 bg-dark-back  transition-all duration-500"
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: "What",
                      subTitle: "",
                    })
                  }
                >
                  What Data We Collect
                </button>
                <div className="w-full h-fit flex justify-center">
                  <div
                    className={
                      expandContext.title === "What"
                        ? `bg-dark flex  w-full h-full justify-center items-start flex-col text-light transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === "ContactInfo"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "What",
                          subTitle: "ContactInfo",
                        })
                      }
                    >
                      Contact Info
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "IdentityInfo"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "What",
                          subTitle: "IdentityInfo",
                        })
                      }
                    >
                      Identity Info
                    </button>

                    <button
                      className={
                        expandContext.subTitle === "ThirdPartyAssociation"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "What",
                          subTitle: "ThirdPartyAssociation",
                        })
                      }
                    >
                      Third Party Association
                    </button>
                  </div>
                </div>
              </div>
              {/* Legal */}
              <div
                className={
                  expandContext.title === "Legal"
                    ? `text-light p-5 rounded-xl text-center text-lg bg-dark-back w-full flex justify-start flex-col gap-y-5 transition-all duration-500 h-fit`
                    : "text-gray text-center text-lg w-full rounded-2xl p-5 bg-dark-back  transition-all duration-500"
                }
              >
                <button
                  className="w-fit h-fit"
                  onClick={() =>
                    setExpandContext({
                      title: "Legal",
                      subTitle: "",
                    })
                  }
                >
                  Country Laws We Obide By
                </button>
                <div className="w-full h-full flex justify-center">
                  <div
                    className={
                      expandContext.title === "Legal"
                        ? `bg-dark flex  w-full h-full justify-center items-start flex-col text-light transition-all duration-300 rounded-2xl p-4 gap-y-3`
                        : `hidden`
                    }
                  >
                    <button
                      className={
                        expandContext.subTitle === "Canada"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Legal",
                          subTitle: "Canada",
                        })
                      }
                    >
                      Canada
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "Iran"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Legal",
                          subTitle: "Iran",
                        })
                      }
                    >
                      Iran
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "Afghanistan"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Legal",
                          subTitle: "Afghanistan",
                        })
                      }
                    >
                      Afghanistan
                    </button>
                    <button
                      className={
                        expandContext.subTitle === "Germany"
                          ? `bg-blue text-light px-5 rounded-2xl transition-all duration-300`
                          : `text-gray`
                      }
                      onClick={() =>
                        setExpandContext({
                          title: "Legal",
                          subTitle: "Germany",
                        })
                      }
                    >
                      Germany
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-4 col-span-8 bg-dark-glass text-light p-5 rounded-2xl text-xl">
            {context}
          </div>
        </div>
      </div>
    </section>
  );
}
