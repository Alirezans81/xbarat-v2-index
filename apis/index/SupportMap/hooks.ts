import { SupportLocation } from "@/lib/store";
import { getSupportLocations } from "./apis";
import { useState } from "react";

const useGetSupportLocations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetch = async (
    setState: (data: SupportLocation[]) => void,
    customFunction?: () => void,
    customFunctionWithData?: (data: SupportLocation[]) => void,
    setStateOnError?: () => void
  ) => {
    setIsLoading(true);
    await getSupportLocations()
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

  return { getSupportLocations: fetch, error, isLoading };
};

export { useGetSupportLocations };
