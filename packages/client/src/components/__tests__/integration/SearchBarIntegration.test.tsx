import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../SearchBar/SearchBar";

describe("SearchBar Component Integration", () => {
  const mockOnChange = vi.fn();
  const mockOnClear = vi.fn();

  it("should render with initial value and handle input changes", () => {
    render(
      <SearchBar
        value="Test"
        onChange={mockOnChange}
        onClear={mockOnClear}
        showClearBtn={true}
      />
    );

    // Check if the input is rendered with the correct value
    expect(screen.getByPlaceholderText("Search accommodation...")).toHaveValue(
      "Test"
    );

    // Simulate typing in the input
    fireEvent.change(screen.getByPlaceholderText("Search accommodation..."), {
      target: { value: "New Search" },
    });

    // Check if the onChange handler is called with the correct value
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should call onClear when clear button is clicked", () => {
    render(
      <SearchBar
        value="Test"
        onChange={mockOnChange}
        onClear={mockOnClear}
        showClearBtn={true}
      />
    );

    // Simulate clicking the clear button
    fireEvent.click(screen.getByLabelText("Clear search"));

    // Check if the onClear handler is called
    expect(mockOnClear).toHaveBeenCalledTimes(1);
  });

  it("should not render clear button when showClearBtn is false", () => {
    render(
      <SearchBar
        value="Test"
        onChange={mockOnChange}
        onClear={mockOnClear}
        showClearBtn={false}
      />
    );

    // Check that the clear button is not in the document
    expect(screen.queryByLabelText("Clear search")).not.toBeInTheDocument();
  });
});
