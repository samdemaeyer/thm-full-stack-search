import { describe, it, expect, vi, beforeEach } from "vitest"; // Importing testing utilities
import { renderHook } from "@testing-library/react-hooks"; // Function to render custom hooks for testing
import { useQuery } from "@tanstack/react-query"; // Importing the useQuery hook for mocking
import useSearchData from "../useSearchData"; // Importing the custom hook to test

// Mock the `useQuery` function from react-query
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(), // Mock implementation of useQuery
}));

describe("useSearchData", () => {
  const mockUseQuery = useQuery as vi.Mock; // Casting useQuery to a mock for type safety

  beforeEach(() => {
    // Clear mocks before each test to avoid test interference
    vi.clearAllMocks();
  });

  it("should return hotels, countries, and cities when data is fetched successfully", () => {
    // Mock successful fetch for hotels, countries, and cities
    mockUseQuery.mockReturnValueOnce({
      data: ["Hotel 1"], // Mock hotel data
      isLoading: false, // Not loading
      isError: false, // No error
    });
    mockUseQuery.mockReturnValueOnce({
      data: ["Country 1"], // Mock country data
      isLoading: false,
      isError: false,
    });
    mockUseQuery.mockReturnValueOnce({
      data: ["City 1"], // Mock city data
      isLoading: false,
      isError: false,
    });

    // Render the hook
    const { result } = renderHook(() => useSearchData("search term"));

    // Assert results
    expect(result.current.hotels).toEqual(["Hotel 1"]); // Check hotel data
    expect(result.current.countries).toEqual(["Country 1"]); // Check country data
    expect(result.current.cities).toEqual(["City 1"]); // Check city data
    expect(result.current.isLoading).toBe(false); // Check loading state
    expect(result.current.isError).toBe(false); // Check error state
  });

  it("should return loading states when data is being fetched", () => {
    // Mock loading state for hotels, countries, and cities
    mockUseQuery.mockReturnValueOnce({
      data: [], // No data yet
      isLoading: true, // Loading state
      isError: false,
    });
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: true,
      isError: false,
    });
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: true,
      isError: false,
    });

    // Render the hook
    const { result } = renderHook(() => useSearchData("search term"));

    // Assert loading states
    expect(result.current.isLoading).toBe(true); // Check loading state
    expect(result.current.isError).toBe(false); // Check error state
  });

  it("should return error state when fetching fails", () => {
    // Mock error state for hotels, countries, and cities
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false, // Not loading
      isError: true, // Error occurred
    });
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: true,
    });
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: true,
    });

    // Render the hook
    const { result } = renderHook(() => useSearchData("search term"));

    // Assert error state
    expect(result.current.isError).toBe(true); // Check error state
    expect(result.current.isLoading).toBe(false); // Check loading state
  });

  it("should not fetch data if searchValue is empty", () => {
    // Mock empty fetch (since searchValue is falsy)
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false, // Not loading
      isError: false, // No error
    });
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: false,
    });
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: false,
    });

    // Render the hook with an empty search value
    const { result } = renderHook(() => useSearchData(""));

    // Assert that no data is fetched and no loading or error state is set
    expect(result.current.hotels).toEqual([]); // Check hotels are empty
    expect(result.current.countries).toEqual([]); // Check countries are empty
    expect(result.current.cities).toEqual([]); // Check cities are empty
    expect(result.current.isLoading).toBe(false); // Check loading state
    expect(result.current.isError).toBe(false); // Check error state
  });
});
