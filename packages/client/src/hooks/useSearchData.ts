import { useState, useEffect } from "react";
import {
  fetchAndFilterHotels,
  fetchAndFilterCountries,
  fetchAndFilterCities,
} from "../services/apiService";
import { Hotel, Country, City } from "../types/models";

const useSearchData = (searchValue: string) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue === "") {
        setHotels([]);
        setCountries([]);
        setCities([]);
        return;
      }

      const filteredHotels = await fetchAndFilterHotels(searchValue);
      const filteredCountries = await fetchAndFilterCountries(searchValue);
      const filteredCities = await fetchAndFilterCities(searchValue);

      setHotels(filteredHotels);
      setCountries(filteredCountries);
      setCities(filteredCities);
    };

    fetchData();
  }, [searchValue]);
  return { hotels, countries, cities };
};

export default useSearchData;
