import { LocaleType } from "@/lib/store";
import { getLocales, getLocaleFile } from "./apis";
import { useState } from "react";

const useGetLocales = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetch = async (
    setState: (data: LocaleType[]) => void,
    customFunction?: () => void,
    customFunctionWithData?: (data: LocaleType[]) => void,
    setStateOnError?: () => void
  ) => {
    setIsLoading(true);
    await getLocales()
      .then((data) => {
        process.env.NEXT_PUBLIC_APP_MODE === "PRODUCTION" && console.log(data);
        setState(data.data.results);
        customFunction && customFunction();
        customFunctionWithData && customFunctionWithData(data.data.results);
        setIsLoading(false);
        return data.data.results;
      })
      .catch((error) => {
        console.log(error);
        setStateOnError && setStateOnError();
        setError(error);
        setIsLoading(false);
      });
  };

  return { getLocales: fetch, error, isLoading };
};

const useGetLocaleFile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetch = async (
    fileUrl: string,
    setState: (data: {}) => void,
    customFunction?: () => void,
    customFunctionWithData?: (data: {}) => void
  ) => {
    setIsLoading(true);
    await getLocaleFile(fileUrl)
      .then((data) => {
        process.env.NEXT_PUBLIC_APP_MODE === "PRODUCTION" && console.log(data);
        setState && setState(data.data);
        customFunction && customFunction();
        customFunctionWithData && customFunctionWithData(data.data);
        setIsLoading(false);
        return data.data;
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  };

  return { getLocaleFile: fetch, error, isLoading };
};

export { useGetLocales, useGetLocaleFile };
