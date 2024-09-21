import { useQuery } from "@tanstack/react-query";
import {
  fetchAndFilterHotels,
  fetchAndFilterCountries,
  fetchAndFilterCities,
} from "../services/apiService";

const useSearchData = (searchValue: string) => {
  const lowerCaseValue = searchValue.toLowerCase();

  const {
    data: hotels = [],
    isLoading: loadingHotels,
    isError: errorHotels,
  } = useQuery({
    queryKey: ["hotels", lowerCaseValue],
    queryFn: () => fetchAndFilterHotels(lowerCaseValue),
    enabled: !!searchValue,
  });

  const {
    data: countries = [],
    isLoading: loadingCountries,
    isError: errorCountries,
  } = useQuery({
    queryKey: ["countries", lowerCaseValue],
    queryFn: () => fetchAndFilterCountries(lowerCaseValue),
    enabled: !!searchValue,
  });

  const {
    data: cities = [],
    isLoading: loadingCities,
    isError: errorCities,
  } = useQuery({
    queryKey: ["cities", lowerCaseValue],
    queryFn: () => fetchAndFilterCities(lowerCaseValue),
    enabled: !!searchValue,
  });

  // Combine loading and error states
  const isLoading = loadingHotels || loadingCountries || loadingCities;
  const isError = errorHotels || errorCountries || errorCities;

  return {
    hotels,
    countries,
    cities,
    isLoading,
    isError,
  };
};

export default useSearchData;
