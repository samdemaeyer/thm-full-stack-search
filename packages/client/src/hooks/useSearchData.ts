import { useQuery } from "@tanstack/react-query";
import {
  fetchAndFilterHotels,
  fetchAndFilterCountries,
  fetchAndFilterCities,
} from "../services/apiService";

const useSearchData = (searchValue: string) => {
  const { data: hotels = [], isLoading: loadingHotels } = useQuery({
    queryKey: ["hotels", searchValue],
    queryFn: () => fetchAndFilterHotels(searchValue),
    enabled: !!searchValue,
  });

  const { data: countries = [], isLoading: loadingCountries } = useQuery({
    queryKey: ["countries", searchValue],
    queryFn: () => fetchAndFilterCountries(searchValue),
    enabled: !!searchValue,
  });

  const { data: cities = [], isLoading: loadingCities } = useQuery({
    queryKey: ["cities", searchValue],
    queryFn: () => fetchAndFilterCities(searchValue),
    enabled: !!searchValue,
  });

  return {
    hotels,
    countries,
    cities,
    loadingHotels,
    loadingCountries,
    loadingCities,
  };
};

export default useSearchData;
