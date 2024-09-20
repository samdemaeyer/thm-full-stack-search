import { API_URL } from "../utils/apiConstants";
import { Hotel, Country, City } from "../types/models";

export const fetchAndFilterHotels = async (value: string) => {
  const hotelsData = await fetch(`${API_URL}/hotels`);
  const hotels = (await hotelsData.json()) as Hotel[];
  return hotels.filter(
    ({ chain_name, hotel_name, city, country }) =>
      chain_name.toLowerCase().includes(value.toLowerCase()) ||
      hotel_name.toLowerCase().includes(value.toLowerCase()) ||
      city.toLowerCase().includes(value.toLowerCase()) ||
      country.toLowerCase().includes(value.toLowerCase())
  );
};

export const fetchAndFilterCountries = async (value: string) => {
  const countriesData = await fetch(`${API_URL}/countries`);
  const countries = (await countriesData.json()) as Country[];
  return countries.filter(
    ({ country, countryisocode }) =>
      countryisocode.toLowerCase().includes(value.toLowerCase()) ||
      country.toLowerCase().includes(value.toLowerCase())
  );
};

export const fetchAndFilterCities = async (value: string) => {
  const citiesData = await fetch(`${API_URL}/cities`);
  const cities = (await citiesData.json()) as City[];
  return cities.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
};
