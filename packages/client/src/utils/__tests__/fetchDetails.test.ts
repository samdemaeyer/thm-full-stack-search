import { describe, it, expect, vi, afterEach } from "vitest"; // Import testing utilities
import { fetchDetails } from "../fetchDetails"; // Import the function to test
import { API_URL } from "../apiConstants"; // Import the API URL constant

// Mock the global fetch function to simulate API calls
global.fetch = vi.fn();

describe("fetchDetails", () => {
  afterEach(() => {
    vi.clearAllMocks(); // Clear mocks after each test to avoid interference
  });

  it("should fetch details successfully for hotels", async () => {
    const mockResponse = { _id: "1", hotel_name: "Test Hotel" }; // Mocked response data

    // Mock the fetch call to return a successful response
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse, // Simulate parsing the JSON response
    });

    const data = await fetchDetails("hotels", "1"); // Call the function with test parameters
    expect(data).toEqual(mockResponse); // Assert that the returned data matches the mock
    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/hotels/1`); // Assert that fetch was called with the correct URL
  });

  it("should throw an error if the fetch fails", async () => {
    // Mock the fetch call to simulate a failed response
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: false, // Indicate a failure
      status: 404,
    });

    await expect(fetchDetails("hotels", "1")).rejects.toThrow(
      "Failed to fetch details" // Assert that the correct error is thrown
    );
  });

  it("should throw an error if there is a network error", async () => {
    // Mock the fetch call to simulate a network error
    (global.fetch as vi.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchDetails("hotels", "1")).rejects.toThrow("Network error"); // Assert that the correct error is thrown
  });
});
