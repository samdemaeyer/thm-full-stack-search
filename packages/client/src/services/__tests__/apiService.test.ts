import { describe, it, expect, vi, afterEach } from "vitest"; // Import testing functions from Vitest
import { fetchAndFilterHotels } from "../apiService"; // Import the function to be tested
import { API_URL } from "../../utils/apiConstants"; // Import the API URL for fetching data

// Mock the global fetch function to simulate network requests
global.fetch = vi.fn();

describe("fetchAndFilterHotels", () => {
  afterEach(() => {
    vi.clearAllMocks(); // Clear all mocks after each test to avoid interference
  });

  it("should fetch and filter hotels successfully", async () => {
    // Mock response data representing hotel records
    const mockResponse = [
      {
        _id: "1",
        chain_name: "Hotel One",
        hotel_name: "Best Hotel",
        city: "City1",
        country: "Country1",
        state: "State1",
        zipcode: "12345",
      },
      {
        _id: "2",
        chain_name: "Hotel Two",
        hotel_name: "Good Hotel",
        city: "City2",
        country: "Country2",
        state: "State2",
        zipcode: "67890",
      },
    ];

    // Simulate a successful fetch response
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse, // Return mock response as JSON
    });

    const lowerCaseValue = "best"; // Search term for filtering
    const filteredHotels = await fetchAndFilterHotels(lowerCaseValue); // Call the function to test
    expect(filteredHotels).toEqual([mockResponse[0]]); // Assert that only matching hotels are returned
    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/hotels`); // Ensure the fetch function was called with the correct URL
  });

  it("should return an empty array if no hotels match the search term", async () => {
    const mockResponse = [
      {
        _id: "1",
        chain_name: "Hotel One",
        hotel_name: "Best Hotel",
        city: "City1",
        country: "Country1",
        state: "State1",
        zipcode: "12345",
      },
      {
        _id: "2",
        chain_name: "Hotel Two",
        hotel_name: "Good Hotel",
        city: "City2",
        country: "Country2",
        state: "State2",
        zipcode: "67890",
      },
    ];

    // Simulate a successful fetch response
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse, // Return mock response as JSON
    });

    const lowerCaseValue = "nonexistent"; // Search term with no matches
    const filteredHotels = await fetchAndFilterHotels(lowerCaseValue); // Call the function to test
    expect(filteredHotels).toEqual([]); // Assert that no hotels are returned
  });

  it("should return an empty array if the fetch fails", async () => {
    // Simulate a failed fetch response
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: false, // Indicate failure
    });

    const filteredHotels = await fetchAndFilterHotels("best"); // Call the function to test
    expect(filteredHotels).toEqual([]); // Assert that an empty array is returned on error
  });

  it("should return an empty array on network error", async () => {
    // Simulate a network error
    (global.fetch as vi.Mock).mockRejectedValueOnce(new Error("Network error"));

    const filteredHotels = await fetchAndFilterHotels("best"); // Call the function to test
    expect(filteredHotels).toEqual([]); // Assert that an empty array is returned on error
  });
});
