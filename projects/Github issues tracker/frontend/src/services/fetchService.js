import { USE_MOCK } from "../config";

import mockdata from "./mockdata.json";

let interations = 0;
const mockFetchService = (waitFor) => {
  if (typeof waitFor !== "number") waitFor = null;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ++interations;
      if (interations % 7 === 0) {
        interations = 0;
        resolve([]);
      }
      resolve(mockdata);
    }, waitFor || 1000);
  });
};

const fetchService = (path, params) => {
  const callPath = params ? `${path}?${new URLSearchParams(params)}` : path;
  return fetch(callPath).then((response) => {
    return response.json();
  });
};

export default USE_MOCK ? mockFetchService : fetchService;
