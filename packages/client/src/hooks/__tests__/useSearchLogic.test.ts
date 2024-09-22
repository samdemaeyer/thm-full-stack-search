import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchLogic } from "../useSearchLogic"; // Adjust the path accordingly
import useDebounce from "../useDebounce"; // Mock this
import useSearchData from "../useSearchData"; // Mock this

// Mocking external hooks
vi.mock("../useDebounce");
vi.mock("../useSearchData");

describe("useSearchLogic", () => {
  beforeEach(() => {
    (useDebounce as vi.Mock).mockImplementation((value) => value);
    (useSearchData as vi.Mock).mockReturnValue({
      hotels: [],
      countries: [],
      cities: [],
      isLoading: false,
      isError: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with the provided initial value", () => {
    const { result } = renderHook(() => useSearchLogic("initial search", 300));

    expect(result.current.searchValue).toBe("initial search");
  });

  it("should update the searchValue when fetchData is called", () => {
    const { result } = renderHook(() => useSearchLogic("initial search", 300));

    act(() => {
      result.current.fetchData({
        target: { value: "new search" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.searchValue).toBe("new search");
  });

  it("should clear the searchValue when clearSearch is called", () => {
    const { result } = renderHook(() => useSearchLogic("initial search", 300));

    act(() => {
      result.current.clearSearch();
    });

    expect(result.current.searchValue).toBe("");
  });

  it("should call useSearchData with debounced search value", () => {
    const { result } = renderHook(() => useSearchLogic("test", 300));

    expect(useSearchData).toHaveBeenCalledWith("test");
    expect(result.current.hotels).toEqual([]);
    expect(result.current.countries).toEqual([]);
    expect(result.current.cities).toEqual([]);
  });
});
