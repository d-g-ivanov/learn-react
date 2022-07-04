import { useState, useCallback } from "react";
import formSubmit from "../services/FormSubmit";

const useFormPost = (path, body) => {
  const [status, setStatus] = useState("idle");

  const postData = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus("pending");

      try {
        await formSubmit(path, body);
        setStatus("success");
      } catch (err) {
        setStatus("failed");
      }
    },
    [path, body]
  );

  return [status, postData];
};

export default useFormPost;
