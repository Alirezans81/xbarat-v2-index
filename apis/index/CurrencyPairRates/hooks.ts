import { CurrencyPair } from "@/lib/store";
import { getCurrencyPairs } from "./apis";
import { useState } from "react";

const useGetCurrencyPairs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetch = async (
    setState: (data: CurrencyPair[]) => void,
    customFunction?: () => void,
    customFunctionWithData?: (data: CurrencyPair[]) => void,
    setStateOnError?: () => void
  ) => {
    setIsLoading(true);
    await getCurrencyPairs()
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

  return { getCurrencyPairs: fetch, error, isLoading };
};

export { useGetCurrencyPairs };
