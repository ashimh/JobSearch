import { useEffect, useState } from "react";
import { BASE_URL } from "../api/endPoints";
// import { RAPID_API_KEY, RAPID_API_HOST } from "@env";
import axios from "axios";

// const rapidApiKey = RAPID_API_KEY;
// const rapidApiHost = RAPID_API_HOST;

const useFetch = ({ endPoint, query }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `${BASE_URL}${endPoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '0d5a354195msh3ff9be4f31aec04p199ffbjsn3f40ffcd434a',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error.response)
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;