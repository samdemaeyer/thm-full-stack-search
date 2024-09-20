import { useQuery } from "@tanstack/react-query";
import {
  fetchAndFilterHotels,
  fetchAndFilterCountries,
  fetchAndFilterCities,
} from "../services/apiService";

const useSearchData = (searchValue: string) => {
  const {
    data: hotels = [],
    isLoading: loadingHotels,
    isError: errorHotels,
  } = useQuery({
    queryKey: ["hotels", searchValue],
    queryFn: () => fetchAndFilterHotels(searchValue),
    enabled: !!searchValue,
  });

  const {
    data: countries = [],
    isLoading: loadingCountries,
    isError: errorCountries,
  } = useQuery({
    queryKey: ["countries", searchValue],
    queryFn: () => fetchAndFilterCountries(searchValue),
    enabled: !!searchValue,
  });

  const {
    data: cities = [],
    isLoading: loadingCities,
    isError: errorCities,
  } = useQuery({
    queryKey: ["cities", searchValue],
    queryFn: () => fetchAndFilterCities(searchValue),
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
