import axios from "axios";
import queryString from "query-string";

const api =
  process.env.NEXT_PUBLIC_APP_MODE === "DEVELOPMENT"
    ? require("../../api-dev.json")
    : require("../../api.json");

const getSupportLocations = () => {
  const limit = require("../../pagination/limit.json")["support-location"];

  const urlWithQueries = queryString.stringifyUrl({
    url: api["support-location"],
    query: { limit },
  });

  return axios.get(urlWithQueries);
};

export { getSupportLocations };
