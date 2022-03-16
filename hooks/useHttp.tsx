import axios from "axios";
import { useState } from "react";

type data = {
  url: string;
  method: "get" | "delete" | "put" | "patch" | "delete";
  body?: any;
  onSucsses?: any;
};

const useHttp = (details: data) => {
  const { url, method, body, onSucsses } = details;
  const [error, setError] = useState(false);

  const doRequest = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8000" + url,
        method: method,
        data: body,
      });

      onSucsses(response.data.data);

      return { data: response.data };
    } catch (err) {
      // global.showAlert(err.response.data.errors);
      //   global.showAlert([]);
      console.log(err);

      setError(true);
      return { error: true };
    }
  };

  return doRequest;
};

export default useHttp;
