import { useQuery } from "@tanstack/react-query";
import {
  fetchAndFilterHotels,
  fetchAndFilterCountries,
  fetchAndFilterCities,
} from "../services/apiService";

// Custom hook for searching and fetching data for hotels, countries, and cities
const useSearchData = (searchValue: string) => {
  // Convert search value to lowercase for consistent comparison
  const lowerCaseValue = searchValue.toLowerCase();

  // Query for fetching hotels data
  const {
    data: hotels = [], // Default to empty array if no data
    isLoading: loadingHotels, // Loading state for hotels
    isError: errorHotels, // Error state for hotels
  } = useQuery({
    queryKey: ["hotels", lowerCaseValue], // Unique query key
    queryFn: () => fetchAndFilterHotels(lowerCaseValue), // Fetch function
    enabled: !!searchValue, // Only run query if searchValue is truthy
  });

  // Query for fetching countries data
  const {
    data: countries = [],
    isLoading: loadingCountries,
    isError: errorCountries,
  } = useQuery({
    queryKey: ["countries", lowerCaseValue],
    queryFn: () => fetchAndFilterCountries(lowerCaseValue),
    enabled: !!searchValue,
  });

  // Query for fetching cities data
  const {
    data: cities = [],
    isLoading: loadingCities,
    isError: errorCities,
  } = useQuery({
    queryKey: ["cities", lowerCaseValue],
    queryFn: () => fetchAndFilterCities(lowerCaseValue),
    enabled: !!searchValue,
  });

  // Combine loading and error states across all queries
  const isLoading = loadingHotels || loadingCountries || loadingCities;
  const isError = errorHotels || errorCountries || errorCities;

  // Return the results and states
  return {
    hotels,
    countries,
    cities,
    isLoading,
    isError,
  };
};

export default useSearchData; // Export the custom hook
