import { describe, it, expect, vi, beforeEach } from "vitest"; // Importing testing utilities from Vitest
import { renderHook, act } from "@testing-library/react-hooks"; // Importing functions to test custom hooks
import useDebounce from "../../useDebounce"; // Importing the useDebounce hook to be tested

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Setting up fake timers for controlling debounce delays
  });

  it("should return the initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500)); // Render the hook with initial value and delay

    expect(result.current).toBe("initial"); // Check that the initial value is returned immediately
  });

  it("should update the debounced value after the delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay), // Rendering the hook with dynamic props
      {
        initialProps: { value: "initial", delay: 500 }, // Initial props for the hook
      }
    );

    // Update the value before the delay
    rerender({ value: "updated", delay: 500 }); // Rerender with a new value

    // The debounced value should still be the initial one because we haven't advanced the timers yet
    expect(result.current).toBe("initial");

    // Fast-forward time to trigger the debounce
    act(() => {
      vi.advanceTimersByTime(500); // Advance the timer by 500ms
    });

    // Now the debounced value should be updated
    expect(result.current).toBe("updated"); // Check that the value is updated correctly
  });

  it("should reset the debounce delay when value changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay), // Rendering the hook with props
      {
        initialProps: { value: "initial", delay: 500 }, // Initial props for the hook
      }
    );

    // Update the value after a short time
    act(() => {
      vi.advanceTimersByTime(250); // Fast-forward the timer by 250ms
    });

    rerender({ value: "new value", delay: 500 }); // Rerender with a new value

    // The debounced value should still be the initial one because debounce hasn't triggered
    expect(result.current).toBe("initial");

    // Fast-forward the timer to complete the debounce delay for the new value
    act(() => {
      vi.advanceTimersByTime(500); // Advance the timer by 500ms
    });

    // The debounced value should now be the new one
    expect(result.current).toBe("new value"); // Check that the value is updated to the new one
  });

  it("should clear the timeout on unmount", () => {
    const { unmount } = renderHook(() => useDebounce("value", 500)); // Render the hook with a value

    unmount(); // Unmount the hook

    // Ensure no timers are left running after unmount
    expect(vi.getTimerCount()).toBe(0); // Check that there are no active timers
  });
});
