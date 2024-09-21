import { useState, ChangeEvent } from "react";
import useDebounce from "./useDebounce";
import useSearchData from "./useSearchData";

export const useSearchLogic = (initialValue: string, debounceDelay: number) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  // Debounce the search value
  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  // Use the debounced value to fetch data (hotels, countries, cities)
  const { hotels, countries, cities, isLoading, isError } =
    useSearchData(debouncedSearchValue);

  // Handle changes to the search input
  const fetchData = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  // Clear the search input (showClearBtn will automatically hide because searchValue is "")
  const clearSearch = () => {
    setSearchValue("");
  };

  // Return all necessary data and handlers
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
