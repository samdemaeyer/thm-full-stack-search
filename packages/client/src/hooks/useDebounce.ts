import { useState, useEffect } from "react";

// Custom hook for debouncing a value
const useDebounce = (value: string, delay: number) => {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value); // Update the debounced value
    }, delay);

    // Cleanup function to clear the timeout if the value changes or the component unmounts
    return () => {
      clearTimeout(handler); // Clear the timeout to prevent stale updates
    };
  }, [value, delay]); // Dependencies: re-run effect if value or delay changes

  return debouncedValue; // Return the debounced value
};

export default useDebounce; // Export the custom hook
