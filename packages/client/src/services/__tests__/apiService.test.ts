import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchAndFilterHotels } from "../apiService";
import { API_URL } from "../../utils/apiConstants";

// Mock the global fetch function
global.fetch = vi.fn();

describe("fetchAndFilterHotels", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch and filter hotels successfully", async () => {
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

    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const lowerCaseValue = "best";
    const filteredHotels = await fetchAndFilterHotels(lowerCaseValue);
    expect(filteredHotels).toEqual([mockResponse[0]]); // Should filter out only hotels that match 'best'
    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/hotels`);
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

    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const lowerCaseValue = "nonexistent";
    const filteredHotels = await fetchAndFilterHotels(lowerCaseValue);
    expect(filteredHotels).toEqual([]); // No hotels match the search term
  });

  it("should return an empty array if the fetch fails", async () => {
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: false,
    });

    const filteredHotels = await fetchAndFilterHotels("best");
    expect(filteredHotels).toEqual([]); // Should return an empty array on error
  });

  it("should return an empty array on network error", async () => {
    (global.fetch as vi.Mock).mockRejectedValueOnce(new Error("Network error"));

    const filteredHotels = await fetchAndFilterHotels("best");
    expect(filteredHotels).toEqual([]); // Should return an empty array on error
  });
});
