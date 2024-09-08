"use client";

import { PageProps } from "@/interfaces/PageProps";
import { CurrencyPair, useLoadingStore } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGetCurrencyPairs } from "@/apis/index/CurrencyPairRates/hooks";
import { useAddComma } from "@/hooks/useNumberFunctions";

export default function CurrencyPairRates(props: PageProps) {
  const { lang, font, theme } = props;
  const addComma = useAddComma();
  const setLoading = useLoadingStore((state) => state.setLoading);

  const { getCurrencyPairs, isLoading: getCurrencyPairsIsLoading } =
    useGetCurrencyPairs();
  useEffect(
    () => setLoading(getCurrencyPairsIsLoading),
    [getCurrencyPairsIsLoading]
  );

  const [currencyPairRates, setCurrencyPairRates] = useState(
    [] as CurrencyPair[]
  );
  useEffect(() => {
    getCurrencyPairs((data) => {
      setCurrencyPairRates(data.filter((e) => e.show_order !== 0));
    });
  }, []);

  return (
    <section
      className={`z-[2] w-full py-4 flex flex-col gap-y-5 items-center bg-${theme}-back font-${font}-regular relative animate-swipe-group`}
    >
      <div className="w-full flex flex-row-reverse items-center">
        <div className="flex animate-swipe">
          {currencyPairRates.map((currencyPairRate, index) => (
            <div
              key={index}
              className={`flex flex-row justify-center gap-x-8 gap-y-2 text-gray whitespace-nowrap w-52 rounded-full ${
                (theme as unknown) === "dark"
                  ? "bg-dark-mahtisa"
                  : "bg-light/70"
              } mx-2 pl-3.5 pr-5 py-2`}
            >
              <div className="w-full flex gap-x-5 justify-between items-center">
                <div className="flex">
                  <div>
                    <Image
                      alt={currencyPairRate.currency_source_abb}
                      src={currencyPairRate.currency_source_sym_pic_light}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="my-auto">
                    <Image
                      alt=""
                      src={require("@/public/images/index/CurrencyPairRates/exchange.png")}
                      width={25}
                      height={25}
                    />
                  </div>
                  <div>
                    <Image
                      alt={currencyPairRate.currency_destination_abb}
                      src={currencyPairRate.currency_destination_sym_pic_light}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <span className={`text-xl ${font === "Fa" ? "" : "-mb-1.5"}`}>
                  {addComma(currencyPairRate.rate)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-swipe">
          {currencyPairRates.map((currencyPairRate, index) => (
            <div
              key={index}
              className={`flex flex-row justify-center gap-x-8 gap-y-2 text-gray whitespace-nowrap w-52 rounded-full ${
                (theme as unknown) === "dark"
                  ? "bg-dark-mahtisa"
                  : "bg-light/70"
              } mx-2 pl-3.5 pr-5 py-2`}
            >
              <div className="w-full flex gap-x-5 justify-between items-center">
                <div className="flex">
                  <div>
                    <Image
                      alt={currencyPairRate.currency_source_abb}
                      src={currencyPairRate.currency_source_sym_pic_light}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="my-auto">
                    <Image
                      alt=""
                      src={require("@/public/images/index/CurrencyPairRates/exchange.png")}
                      width={25}
                      height={25}
                    />
                  </div>
                  <div>
                    <Image
                      alt={currencyPairRate.currency_destination_abb}
                      src={currencyPairRate.currency_destination_sym_pic_light}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <span className={`text-xl ${font === "Fa" ? "" : "-mb-1.5"}`}>
                  {addComma(currencyPairRate.rate)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
