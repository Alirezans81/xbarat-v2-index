"use client";

import { useEffect } from "react";
import { useGetLocaleFile, useGetLocales } from "@/apis/common/language/hooks";
import {
  useFontStore, useLocaleFileStore,
  useLocalesStore
} from "@/lib/store";

export default function OnLoad() {
  const locales = useLocalesStore((state) => state.locales);
  const updateLocales = useLocalesStore((state) => state.updateLocales);
  const updateLocaleFile = useLocaleFileStore(
    (state) => state.updateLocaleFile
  );
  const setFont = useFontStore((state) => state.setFont);

  const { getLocales } = useGetLocales();

  useEffect(() => {
    getLocales(updateLocales);
  }, []);

  const { getLocaleFile } =
    useGetLocaleFile();

  useEffect(() => {
    if (locales[0]) {
      getLocaleFile(locales[0].file, updateLocaleFile);
      setFont(locales[0].symbol);
    }
  }, [locales]);

  return <></>;
}
