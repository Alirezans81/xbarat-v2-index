import axios from "axios";
import queryString from "query-string";

import dev from "@/apis/api-dev";
import prod from "@/apis/api";

const api = process.env.NEXT_PUBLIC_APP_MODE === "DEVELOPMENT" ? dev() : prod();

const getLocales = () => {
  const limit = require("../../pagination/limit.json")["locale"];

  const urlWithQueries = queryString.stringifyUrl({
    url: api["locale"],
    query: { limit },
  });

  return axios.get(urlWithQueries);
};

const getLocaleFile = (fileUrl: string) => {
  return axios.get(fileUrl);
};

export { getLocales, getLocaleFile };
