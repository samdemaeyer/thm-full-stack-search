import { useState, ChangeEvent } from "react";
import useDebounce from "./useDebounce"; // Importing the debounce hook for managing delayed updates
import useSearchData from "./useSearchData"; // Importing the hook that fetches search data

// Custom hook for managing search logic, including debouncing and fetching data
export const useSearchLogic = (initialValue: string, debounceDelay: number) => {
  // State to hold the current search value
  const [searchValue, setSearchValue] = useState(initialValue);

  // Get the debounced search value, which updates after the specified delay
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Fetch data for hotels, countries, and cities based on the debounced value
  const { hotels, countries, cities, isLoading, isError } =
    useSearchData(debouncedSearchValue);

  // Function to handle input changes in the search field
  const fetchData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value); // Update the search value with user input
  };

  // Function to clear the search input
  const clearSearch = () => {
    setSearchValue(""); // Reset the search value to an empty string
  };

  // Return the search value, handler functions, and fetched data
  return {
    searchValue,
    fetchData,
    clearSearch,
    hotels,
    countries,
    cities,
    isLoading,
    isError,
  };
};
