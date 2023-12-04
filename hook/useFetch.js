// 43. Create useFetch hook
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ endpoint, query }) => {
  // 44. Create fetch status states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 45. From rapidAPI JSearch
  // 46. Generic options with inputtable endpoint and query params
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "8acd173b42msh07b65892d3f6df0p17d508jsnc1f0a231dbf9",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  // 47. Create fetchData function
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  // 48. Only fetch data once
  useEffect(() => {
    fetchData();
  }, []);

  // 49. For refetching if needed
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  // 50. Return all states and refetch
  return { data, isLoading, error, refetch };
};

export default useFetch;
