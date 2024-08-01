/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useGetLocaleFile } from "@/apis/common/language/hooks";
import {
  LocaleType,
  useFontStore,
  useLoadingStore,
  useLocaleFileStore,
  useLocalesStore,
} from "@/lib/store";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

export default function LanguageSwitcher() {
  const setLoading = useLoadingStore((state) => state.setLoading);

  const locales = useLocalesStore((state) => state.locales);
  const setLang = useLocaleFileStore((state) => state.updateLocaleFile);
  const setFont = useFontStore((state) => state.setFont);

  const [selectedLocaleIndex, setSelectedLocaleIndex] = useState(-1);
  const [selectedLocale, setSelectedLocale] = useState<LocaleType>();
  const { getLocaleFile, isLoading: getLocaleFileIsLoading } =
    useGetLocaleFile();
  useEffect(() => setLoading(getLocaleFileIsLoading), [getLocaleFileIsLoading]);

  useEffect(() => {
    if (selectedLocaleIndex >= 0 && locales[selectedLocaleIndex]) {
      setFont(locales[selectedLocaleIndex].symbol);
      window.localStorage.setItem(
        "selectedLocaleIndex",
        selectedLocaleIndex + ""
      );

      getLocaleFile(
        locales[selectedLocaleIndex].file,
        () => {},
        () => {
          location.reload();
        },
        setLang
      );
    }
  }, [selectedLocaleIndex]);

  const findSavedLocale = () => {
    const savedSelectedLocaleIndex: number | null = window.localStorage.getItem(
      "selectedLocaleIndex"
    ) as unknown as number;

    savedSelectedLocaleIndex !== null && savedSelectedLocaleIndex !== undefined
      ? setSelectedLocale(locales[savedSelectedLocaleIndex])
      : setSelectedLocale(locales[0]);
  };
  useEffect(() => {
    findSavedLocale();
  }, []);

  console.log(selectedLocaleIndex);

  return (
    <div className="flex items-center">
      {selectedLocale && (
        <img
          id="lang-tooltip"
          alt={selectedLocale.title}
          src={selectedLocale.icon}
          className="w-7 h-7 cursor-pointer"
        />
      )}
      <Tooltip
        anchorSelect={`#lang-tooltip`}
        place="top"
        clickable
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          color: "#2A2B2E",
          zIndex: 100,
          backdropFilter: "none",
        }}
      >
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {locales.map((locale, index) => (
            <img
              key={index}
              alt={locale.title}
              src={locale.icon}
              onClick={() => setSelectedLocaleIndex(index)}
              className="w-7 h-7 cursor-pointer"
            />
          ))}
        </div>
      </Tooltip>
    </div>
  );
}
