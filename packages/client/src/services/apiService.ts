import { API_URL } from "../utils/apiConstants"; // Import the API URL for fetching data
import { Hotel, Country, City } from "../types/models"; // Import the data models

// Fetch and filter hotels
export const fetchAndFilterHotels = async (lowerCaseValue: string) => {
  try {
    // Fetch hotels data from the API
    const hotelsData = await fetch(`${API_URL}/hotels`);

    // Check if the response is OK; if not, throw an error
    if (!hotelsData.ok) throw new Error("Failed to fetch hotels");

    // Parse the response as JSON and cast it to the Hotel type
    const hotels = (await hotelsData.json()) as Hotel[];

    // Filter hotels based on various properties that match the search term
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
    console.error(error); // Log the error to the console
    return []; // Return an empty array on error
  }
};

// Fetch and filter countries
export const fetchAndFilterCountries = async (lowerCaseValue: string) => {
  try {
    // Fetch countries data from the API
    const countriesData = await fetch(`${API_URL}/countries`);

    // Check if the response is OK; if not, throw an error
    if (!countriesData.ok) throw new Error("Failed to fetch countries");

    // Parse the response as JSON and cast it to the Country type
    const countries = (await countriesData.json()) as Country[];

    // Filter countries based on matching properties
    return countries.filter(
      ({ country, countryisocode }) =>
        countryisocode.toLowerCase().includes(lowerCaseValue) ||
        country.toLowerCase().includes(lowerCaseValue)
    );
  } catch (error) {
    console.error(error); // Log the error to the console
    return []; // Return an empty array on error
  }
};

// Fetch and filter cities
export const fetchAndFilterCities = async (lowerCaseValue: string) => {
  try {
    // Fetch cities data from the API
    const citiesData = await fetch(`${API_URL}/cities`);

    // Check if the response is OK; if not, throw an error
    if (!citiesData.ok) throw new Error("Failed to fetch cities");

    // Parse the response as JSON and cast it to the City type
    const cities = (await citiesData.json()) as City[];

    // Filter cities based on matching names
    return cities.filter(({ name }) =>
      name.toLowerCase().includes(lowerCaseValue)
    );
  } catch (error) {
    console.error(error); // Log the error to the console
    return []; // Return an empty array on error
  }
};
