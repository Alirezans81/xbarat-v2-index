import { PageProps } from "@/interfaces/PageProps";
import { ThemeState } from "@/lib/store";
import Image from "next/image";

import Pin from "@/public/images/index/Agencies/pin.png";
import Head from "@/public/images/index/Agencies/head.png";
import Phone from "@/public/images/index/Agencies/phone.png";

export default function Agencies(props: PageProps) {
  const { lang, font, theme } = props;

  const agencies = [
    {
      location: "Mashhad, 16th Rahnamei Street",
      head: "Alireza Haghi",
      phone: "+98513824369",
    },
    {
      location: "Golshahr, 34th Shareiati Street",
      head: "Sajjadi",
      phone: "+98513853604",
    },
    {
      location: "Tehran, 3th Vali Asr Street",
      head: "Alireza Nasiri",
      phone: "+989385364323",
    },
  ];

  return (
    <section
      className={`z-[2] w-full py-4 flex flex-col gap-y-5 items-center bg-${theme}-back font-${font}-regular relative`}
    >
      <div className="w-full flex flex-row-reverse items-center">
        <div className="flex animate-swipe">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className={`flex flex-row justify-center gap-x-8 gap-y-2 text-gray whitespace-nowrap w-fit rounded-full ${
                (theme as unknown) === "dark"
                  ? "bg-dark-mahtisa"
                  : "bg-light/70"
              } mx-2 pl-3.5 pr-9 py-3.5`}
            >
              <div className="flex items-center gap-x-2">
                <span className="-mb-1">{index + 1}.</span>
                <Image alt="Map Pin" src={Pin} className="w-5 h-5" />
                <span className="-mb-1">{agency.location}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image alt="Head" src={Head} className="w-5 h-5" />
                <span className="-mb-1">{agency.head}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image alt="Phone" src={Phone} className="w-5 h-5" />
                <span className="-mb-1">{agency.phone}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-swipe">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className={`flex flex-row justify-center gap-x-8 gap-y-2 text-gray whitespace-nowrap w-fit rounded-full ${
                (theme as unknown) === "dark"
                  ? "bg-dark-mahtisa"
                  : "bg-light/70"
              } mx-2 pl-3.5 pr-9 py-3.5`}
            >
              <div className="flex items-center gap-x-2">
                <span className="-mb-1">{index + 1}.</span>
                <Image alt="Map Pin" src={Pin} className="w-5 h-5" />
                <span className="-mb-1">{agency.location}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image alt="Head" src={Head} className="w-5 h-5" />
                <span className="-mb-1">{agency.head}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <Image alt="Phone" src={Phone} className="w-5 h-5" />
                <span className="-mb-1">{agency.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
