import axios from "axios";
import queryString from "query-string";

const api =
  process.env.NEXT_PUBLIC_APP_MODE === "DEVELOPMENT"
    ? require("../../api-dev.json")
    : require("../../api.json");

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
