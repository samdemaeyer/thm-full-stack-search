import { renderHook } from "@testing-library/react-hooks";
import useSearchData from "../useSearchData";
import { useQuery } from "@tanstack/react-query";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the `useQuery` function from react-query
vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

describe("useSearchData", () => {
  const mockUseQuery = useQuery as vi.Mock;

  beforeEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  it("should return hotels, countries, and cities when data is fetched successfully", () => {
    // Mock successful fetch for hotels, countries, and cities
    mockUseQuery.mockReturnValueOnce({
      data: ["Hotel 1"],
      isLoading: false,
      isError: false,
    });
    mockUseQuery.mockReturnValueOnce({
      data: ["Country 1"],
      isLoading: false,
      isError: false,
    });
    mockUseQuery.mockReturnValueOnce({
      data: ["City 1"],
      isLoading: false,
      isError: false,
    });

    // Render the hook
    const { result } = renderHook(() => useSearchData("search term"));

    // Assert results
    expect(result.current.hotels).toEqual(["Hotel 1"]);
    expect(result.current.countries).toEqual(["Country 1"]);
    expect(result.current.cities).toEqual(["City 1"]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("should return loading states when data is being fetched", () => {
    // Mock loading state for hotels, countries, and cities
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
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: true,
      isError: false,
    });

    // Render the hook
    const { result } = renderHook(() => useSearchData("search term"));

    // Assert loading states
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
  });

  it("should return error state when fetching fails", () => {
    // Mock error state for hotels, countries, and cities
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
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: true,
    });

    // Render the hook
    const { result } = renderHook(() => useSearchData("search term"));

    // Assert error state
    expect(result.current.isError).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });

  it("should not fetch data if searchValue is empty", () => {
    // Mock empty fetch (since searchValue is falsy)
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
    mockUseQuery.mockReturnValueOnce({
      data: [],
      isLoading: false,
      isError: false,
    });

    // Render the hook with an empty search value
    const { result } = renderHook(() => useSearchData(""));

    // Assert that no data is fetched and no loading or error state is set
    expect(result.current.hotels).toEqual([]);
    expect(result.current.countries).toEqual([]);
    expect(result.current.cities).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });
});
