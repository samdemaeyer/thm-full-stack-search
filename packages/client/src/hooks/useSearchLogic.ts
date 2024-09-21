import { useState, useEffect, ChangeEvent } from "react";
import useDebounce from "./useDebounce"; // Assume you have a debounce hook
import useSearchData from "./useSearchData"; // The hook that fetches data

export const useSearchLogic = (initialValue: string, debounceDelay: number) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  // Debounced search value
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Fetch data based on debounced value
  const { hotels, countries, cities, isLoading, isError } =
    useSearchData(debouncedSearchValue);

  // Handle changes to the input field
  const fetchData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value); // Only update the search value here
  };

  // Clear the search input
  const clearSearch = () => {
    setSearchValue("");
  };

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
