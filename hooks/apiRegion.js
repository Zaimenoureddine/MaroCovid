import { useState, useEffect } from "react";
import covidregionApi from "../api/covidregionApi"
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const getApi = async () => {
    try {
      const response = await covidregionApi.get();
      setResults(response.data.data.regions);
    } catch (error) {
      setErrorMessage("Something went work");
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return [results, getApi, errorMessage];
};
