import { useState } from "react";
import fetchService from "../services/fetchService";

import {
  GITHUB_ISSUES_URL as path,
  GITHUB_ISSUES_PARAMS as params,
  GITHUB_ISSUES_KEEP as fields
} from "../config";

// helpers
// deep-nested clean up
const sanitizeOne = (data) =>
  fields.reduce((a, x) => {
    if (Array.isArray(data[x])) a[x] = data[x].map(sanitizeOne);
    else if (typeof data[x] === "object" && data[x] !== null)
      a[x] = sanitizeOne(data[x]);
    else if (data.hasOwnProperty(x)) a[x] = data[x];
    return a;
  }, {});

const useGetGithub = (body) => {
  const [status, setStatus] = useState("idle");

  const getData = async (page = 1) => {
    setStatus("pending");

    // update the path with proper user and repo
    const callPath = path.replace(/{([^}]+)}/g, (match) => {
      match = match.substr(1, match.length - 2);
      return body[match] || "";
    });

    // try to fetch the data
    try {
      let data = await fetchService(callPath, { ...params, page });
      if (data.message) throw new Error(data.message);

      data = data.map(sanitizeOne);

      setStatus("success");

      return { data: data, error: null };
    } catch (err) {
      setStatus("failed");

      let error = "";

      if (err.message === "Not Found")
        error = "User or Repo information is incorrect! Please try again.";
      else error = err.message;

      return {
        data: [],
        error
      };
    }
  };

  return [status, getData];
};

export default useGetGithub;

// const getData = useCallback(
//   async (page = 1) => {
//     setStatus("pending");

//     const callPath = path.replace(/{([^}]+)}/g, (match) => {
//       match = match.substr(1, match.length - 2);
//       return body[match] || "";
//     });

//     try {
//       let data = await fetchService(callPath, { ...params, page });
//       if (data.message) throw new Error(data.message);

//       data = data.map(sanitizeOne);

//       setStatus("success");

//       return { data: data, error: null };
//     } catch (err) {
//       setStatus("failed");

//       let error = "";

//       if (err.message === "Not Found")
//         error = "User or Repo information is incorrect! Please try again.";
//       else error = err.message;

//       return {
//         data: [],
//         error
//       };
//     }
//   },
//   [body]
// );
