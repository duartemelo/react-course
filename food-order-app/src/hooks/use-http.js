import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      throw (err);
    }
    setIsLoading(false);
  }, []);
  // com o callback, a função é "memorizada" e não é criada outra vez, evitando o infinite loop ao colocar a função nas dependencias do useEffect no App.js

  return {
    // isLoading: isLoading,
    // error: error,
    // sendRequest: sendRequest,
    isLoading, // same as above
    sendRequest,
  };
};

export default useHttp;
