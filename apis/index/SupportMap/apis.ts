import axios from "axios";
import queryString from "query-string";

import dev from "@/apis/api-dev";
import prod from "@/apis/api";

const api = process.env.NEXT_PUBLIC_APP_MODE === "DEVELOPMENT" ? dev() : prod();
const getSupportLocations = () => {
  const limit = require("../../pagination/limit.json")["support-location"];

  const urlWithQueries = queryString.stringifyUrl({
    url: api["support-location"],
    query: { limit },
  });

  return axios.get(urlWithQueries);
};

export { getSupportLocations };
