import { useEffect, useState } from "react";


export const useGetColors = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);

  async function getColors() {
    const url = "http://localhost:3001/api/colors";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(`Response status: ${response.status}`);
        setIsLoading(false);
        setColors([]);
      }

      const json = await response.json();
      setColors(json);
      setIsLoading(false);
      setError(null);
      console.log(json);
    } catch (error) {
      setError(`Something went wrong with the get colors request: ${error.message}`);
      setIsLoading(false);
      setColors([]);
      console.error(error.message);
    }
  }

  useEffect(() => {
    getColors();
  }, []);

  return {
    isLoading,
    colors,
    error,
  };
};