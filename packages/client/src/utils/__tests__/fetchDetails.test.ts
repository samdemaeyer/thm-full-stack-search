import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchDetails } from "../fetchDetails";
import { API_URL } from "../apiConstants";

// Mock the global fetch function
global.fetch = vi.fn();

describe("fetchDetails", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch details successfully for hotels", async () => {
    const mockResponse = { _id: "1", hotel_name: "Test Hotel" };
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchDetails("hotels", "1");
    expect(data).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/hotels/1`);
  });

  it("should throw an error if the fetch fails", async () => {
    (global.fetch as vi.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(fetchDetails("hotels", "1")).rejects.toThrow(
      "Failed to fetch details"
    );
  });

  it("should throw an error if there is a network error", async () => {
    (global.fetch as vi.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchDetails("hotels", "1")).rejects.toThrow("Network error");
  });
});
