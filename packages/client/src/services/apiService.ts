import { API_URL } from "../utils/apiConstants";
import { Hotel, Country, City } from "../types/models";

// Fetch and filter hotels
export const fetchAndFilterHotels = async (lowerCaseValue: string) => {
  try {
    const hotelsData = await fetch(`${API_URL}/hotels`);
    if (!hotelsData.ok) throw new Error("Failed to fetch hotels");
    const hotels = (await hotelsData.json()) as Hotel[];
    return hotels.filter(
      ({ chain_name, hotel_name, city, country, state, zipcode }) =>
        chain_name.toLowerCase().includes(lowerCaseValue) ||
        hotel_name.toLowerCase().includes(lowerCaseValue) ||
        city.toLowerCase().includes(lowerCaseValue) ||
        country.toLowerCase().includes(lowerCaseValue) ||
        state.toLowerCase().includes(lowerCaseValue) ||
        zipcode.includes(lowerCaseValue)
    );
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};

// Fetch and filter countries
export const fetchAndFilterCountries = async (lowerCaseValue: string) => {
  try {
    const countriesData = await fetch(`${API_URL}/countries`);
    if (!countriesData.ok) throw new Error("Failed to fetch countries");
    const countries = (await countriesData.json()) as Country[];
    return countries.filter(
      ({ country, countryisocode }) =>
        countryisocode.toLowerCase().includes(lowerCaseValue) ||
        country.toLowerCase().includes(lowerCaseValue)
    );
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};

// Fetch and filter cities
export const fetchAndFilterCities = async (lowerCaseValue: string) => {
  try {
    const citiesData = await fetch(`${API_URL}/cities`);
    if (!citiesData.ok) throw new Error("Failed to fetch cities");
    const cities = (await citiesData.json()) as City[];
    return cities.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseValue)
    );
  } catch (error) {
    console.error(error);
    return []; // Return an empty array on error
  }
};
