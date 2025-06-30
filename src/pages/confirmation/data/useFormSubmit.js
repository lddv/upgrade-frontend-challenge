import { useState } from "react";

export const useFormSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function postFormSubmit(userData) {
    setIsLoading(true);
    setError(null);
    
    const url = "http://localhost:3001/api/submit";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      if (response.status === 400) {
        setError(`Response status: ${response.status}`);
        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      setError(null);
      return false;
    } catch (error) {
      setError(`Something went wrong while submitting the form: ${error.message}`);
      setIsLoading(false);
      console.error(error.message);
    }
  }

  return {
    isLoading,
    formSubmitAction: postFormSubmit,
    error,
  };
};