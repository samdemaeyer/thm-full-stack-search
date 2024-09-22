import { API_URL } from "./apiConstants"; // Import the API_URL constant for constructing the fetch URL

// Function to fetch details based on type (hotels, countries, or cities) and ID
export const fetchDetails = async (
  type: "hotels" | "countries" | "cities", // Specify allowed types for clarity
  id: string // The ID of the item to fetch details for
) => {
  // Construct the fetch request URL using the API_URL, type, and ID
  const response = await fetch(`${API_URL}/${type}/${id}`);

  // Check if the response was successful
  if (!response.ok) {
    throw new Error("Failed to fetch details"); // Throw an error if the response is not OK
  }

  // Parse and return the JSON data from the response
  return response.json();
};
