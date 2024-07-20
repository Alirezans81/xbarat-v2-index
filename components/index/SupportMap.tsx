"use client";

import { PageProps } from "@/interfaces/PageProps";
import {
  Currency,
  SupportLocation,
  ThemeState,
  useLoadingStore,
  WalletTankType,
} from "@/lib/store";
import Image from "next/image";

import MapImage from "@/public/images/index/Map/map.png";
import { Tooltip } from "react-tooltip";
import { useGetSupportLocations } from "@/apis/index/SupportMap/hooks";
import { useEffect, useState } from "react";

function Marker(
  props: {
    country_icon: string;
    country_title: string;
    currencies: Currency[];
    wallet_tank_types: WalletTankType[];
    delay: boolean;
    id: string;
    left: number;
    top: number;
  } & PageProps
) {
  const {
    font,
    lang,
    theme,
    delay,
    id,
    left,
    top,
    country_icon,
    country_title,
    currencies,
    wallet_tank_types,
  } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";

  return (
    <div
      className="absolute"
      style={{ left: 47.5 + left / 3.5 + "%", top: 64 - top / 1.7 + "%" }}
    >
      <div className="w-2 h-2 bg-yellow rounded-full relative">
        <div
          className={`absolute w-4 h-4 bg-yellow rounded-full opacity-60 top-[-50%] left-[-50%] animate-pulse-mine ${
            delay ? "animation-delay" : ""
          }`}
        />
        <div
          id={id + "-tooltip"}
          className={`absolute w-6 h-6 bg-yellow rounded-full opacity-30 top-[-50%] left-[-50%] ml-[-50%] mt-[-50%] animate-pulse-mine ${
            delay ? "animation-delay-marker" : ""
          }`}
        />
        <Tooltip
          anchorSelect={`#${id}-tooltip`}
          place="top"
          clickable
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            color: "#2A2B2E",
            zIndex: 100,
          }}
        >
          <div
            className={`flex flex-col items-center gap-y-2 font-${font}-bold`}
          >
            <div className="flex justify-center gap-x-2 items-center border-b border-gray w-full pb-2">
              <Image
                alt={country_title + " icon"}
                src={require("@/public/images/index/Map/ca.png")}
                className="w-6 h-6"
              />
              <span className={`text-${theme} text-lg text-center -mb-2`}>
                {country_title}
              </span>
            </div>
            <div className="w-full grid grid-cols-2 divide-x">
              {currencies.length <= 1 && (
                <div className="col-span-2 flex justify-center items-center">
                  <Image
                    width={40}
                    height={40}
                    alt={currencies[0].title}
                    src={currencies[0].get_sym_pic_dark_url}
                  />
                </div>
              )}
              {currencies.length > 1 &&
                currencies.map((currency, index) => (
                  <div
                    key={index}
                    className="col-span-1 flex justify-center items-center"
                  >
                    <Image
                      width={40}
                      height={40}
                      alt={currency.title}
                      src={currency.get_sym_pic_dark_url}
                    />
                  </div>
                ))}
            </div>
            <span className="text-dark text-center mt-2">Using</span>
            <div className="flex flex-col gap-y-1">
              {wallet_tank_types.map((wallet_tank_type, index) => (
                <span
                  key={index}
                  className="w-full px-3 pt-1.5 rounded-full text-center bg-blue text-light"
                >
                  {wallet_tank_type.title}
                </span>
              ))}
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default function SupportMap(props: PageProps) {
  const { font, lang, theme } = props;
  const oppositeTheme: string =
    theme == ("dark" as ThemeState["theme"]) ? "light" : "dark";
  const setLoading = useLoadingStore((state) => state.setLoading);

  const [supportLocations, setSupportLocations] = useState<SupportLocation[]>(
    []
  );

  const { getSupportLocations, isLoading: getSupportLocationsIsLoading } =
    useGetSupportLocations();
  useEffect(() => {
    setLoading(getSupportLocationsIsLoading);
  }, [getSupportLocationsIsLoading]);

  useEffect(() => {
    getSupportLocations(setSupportLocations);
  }, []);

  return (
    <section
      id="support-map"
      className={`w-full flex flex-col items-center gap-y-20 font-${font}-regular`}
      style={{ direction: font === "Fa" ? "rtl" : "ltr", textAlign: "start" }}
    >
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="text-blue text-lg">{lang["index-support-map"]}</div>
        <span
          className={`text-${oppositeTheme} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
        >
          {lang["index-support-map-title"]}
        </span>
        <span className="text-gray text-xl">
          {lang["index-support-map-desc"]}
        </span>
      </div>

      <div className="relative">
        <div className="opacity-70 absolute z-[0] w-[80%] h-[80%] rounded-full -bottom-40 -left-[90%] light__gradient" />
        <div className="opacity-25 absolute z-[0] w-[50%] h-[50%] -right-[50%] -top-28 blue__gradient" />

        <Image id="map-img" alt="Map" src={MapImage} className="w-full" />

        {supportLocations.map((supportLocation, index) => (
          <Marker
            key={index}
            font={font}
            lang={lang}
            theme={theme}
            id={"tooltip" + index}
            delay={index % 3 === 0}
            country_icon={supportLocation.country_icon}
            country_title={supportLocation.country_title}
            currencies={supportLocation.currencies}
            wallet_tank_types={supportLocation.wallet_tank_type}
            top={supportLocation.latitude}
            left={supportLocation.longitude}
          />
        ))}
      </div>
    </section>
  );
}
