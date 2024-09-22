import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"; // Importing testing utilities
import { renderHook, act } from "@testing-library/react-hooks"; // Function to render custom hooks for testing
import { useSearchLogic } from "../useSearchLogic"; // Importing the custom hook to test
import useDebounce from "../useDebounce"; // Mock this hook
import useSearchData from "../useSearchData"; // Mock this hook

// Mocking external hooks
vi.mock("../useDebounce"); // Mock the useDebounce hook
vi.mock("../useSearchData"); // Mock the useSearchData hook

describe("useSearchLogic", () => {
  beforeEach(() => {
    // Set up mock implementations before each test
    (useDebounce as vi.Mock).mockImplementation((value) => value); // Mock useDebounce to return the original value
    (useSearchData as vi.Mock).mockReturnValue({
      hotels: [], // Mock return value for hotels
      countries: [], // Mock return value for countries
      cities: [], // Mock return value for cities
      isLoading: false, // Mock loading state
      isError: false, // Mock error state
    });
  });

  afterEach(() => {
    // Clear mocks after each test to avoid interference
    vi.clearAllMocks();
  });

  it("should initialize with the provided initial value", () => {
    const { result } = renderHook(() => useSearchLogic("initial search", 300)); // Render the hook with initial value

    expect(result.current.searchValue).toBe("initial search"); // Assert initial value is set correctly
  });

  it("should update the searchValue when fetchData is called", () => {
    const { result } = renderHook(() => useSearchLogic("initial search", 300)); // Render the hook

    act(() => {
      result.current.fetchData({
        target: { value: "new search" }, // Simulate input change event
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.searchValue).toBe("new search"); // Assert search value is updated
  });

  it("should clear the searchValue when clearSearch is called", () => {
    const { result } = renderHook(() => useSearchLogic("initial search", 300)); // Render the hook

    act(() => {
      result.current.clearSearch(); // Call clearSearch function
    });

    expect(result.current.searchValue).toBe(""); // Assert search value is cleared
  });

  it("should call useSearchData with debounced search value", () => {
    const { result } = renderHook(() => useSearchLogic("test", 300)); // Render the hook with test value

    expect(useSearchData).toHaveBeenCalledWith("test"); // Assert useSearchData is called with the correct value
    expect(result.current.hotels).toEqual([]); // Assert hotels are empty
    expect(result.current.countries).toEqual([]); // Assert countries are empty
    expect(result.current.cities).toEqual([]); // Assert cities are empty
  });
});
