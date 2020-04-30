import { useState, useEffect } from "react";
import covidApi from "../api/covidApi";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const getApi = async (country) => {
    try {
      const response = await covidApi.get(country);
      setResults(response.data);
    } catch (error) {
      setErrorMessage("Something went work");
    }
  };

  useEffect(() => {
    getApi("Morocco");
  }, []);

  return [results, getApi, errorMessage];
};
