import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect, vi, beforeEach } from "vitest";
import useDebounce from "../useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Use fake timers to control the debounce delay
  });

  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));

    expect(result.current).toBe("initial"); // The initial value should be returned immediately
  });

  it("should update the debounced value after the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    // Update the value before the delay
    rerender({ value: "updated", delay: 500 });

    // The debounced value should still be the initial one because we haven't advanced the timers yet
    expect(result.current).toBe("initial");

    // Fast-forward time to trigger the debounce
    act(() => {
      vi.advanceTimersByTime(500); // Fast-forward the timer by 500ms
    });

    // Now the debounced value should be updated
    expect(result.current).toBe("updated");
  });

  it("should reset the debounce delay when value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );

    // Update the value after a short time
    act(() => {
      vi.advanceTimersByTime(250); // Fast-forward the timer by 250ms
    });

    rerender({ value: "new value", delay: 500 });

    // The debounced value should still be the initial one because debounce hasn't triggered
    expect(result.current).toBe("initial");

    // Fast-forward the timer to complete the debounce delay for the new value
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // The debounced value should now be the new one
    expect(result.current).toBe("new value");
  });

  it("should clear the timeout on unmount", () => {
    const { unmount } = renderHook(() => useDebounce("value", 500));

    unmount();

    // Ensure no timers are left running after unmount
    expect(vi.getTimerCount()).toBe(0);
  });
});
