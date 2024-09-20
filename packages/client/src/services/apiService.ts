import { API_URL } from "../utils/apiConstants";
import { Hotel, Country, City } from "../types/models";

export const fetchAndFilterHotels = async (value: string) => {
  try {
    const hotelsData = await fetch(`${API_URL}/hotels`);
    if (!hotelsData.ok) throw new Error("Failed to fetch hotels");
    const hotels = (await hotelsData.json()) as Hotel[];
    return hotels.filter(
      ({ chain_name, hotel_name, city, country }) =>
        chain_name.toLowerCase().includes(value.toLowerCase()) ||
        hotel_name.toLowerCase().includes(value.toLowerCase()) ||
        city.toLowerCase().includes(value.toLowerCase()) ||
        country.toLowerCase().includes(value.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};

export const fetchAndFilterCountries = async (value: string) => {
  try {
    const countriesData = await fetch(`${API_URL}/countries`);
    if (!countriesData.ok) throw new Error("Failed to fetch countries");
    const countries = (await countriesData.json()) as Country[];
    return countries.filter(
      ({ country, countryisocode }) =>
        countryisocode.toLowerCase().includes(value.toLowerCase()) ||
        country.toLowerCase().includes(value.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};

export const fetchAndFilterCities = async (value: string) => {
  try {
    const citiesData = await fetch(`${API_URL}/cities`);
    if (!citiesData.ok) throw new Error("Failed to fetch cities");
    const cities = (await citiesData.json()) as City[];
    return cities.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};
