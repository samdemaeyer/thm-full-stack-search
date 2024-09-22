// Import necessary testing utilities and the SearchBar component
import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBar from "../../SearchBar/SearchBar"; // The component being tested

// Describe the test suite for the SearchBar component
describe("SearchBar Component", () => {
  // Test case for rendering the search bar correctly
  it("renders the search bar correctly", () => {
    render(
      <SearchBar
        value="" // Initial value for the input
        onChange={vi.fn()} // Mock function for handling changes
        onClear={vi.fn()} // Mock function for clearing the search
        showClearBtn={false} // Indicates whether to show the clear button
      />
    );

    // Check that the input is in the document using its placeholder
    const input = screen.getByPlaceholderText("Search accommodation...");
    expect(input).toBeInTheDocument();

    // Check that the search icon is rendered using the data-testid
    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();

    // Check that the clear button is not rendered when showClearBtn is false
    const clearButton = screen.queryByRole("button", { name: /clear search/i });
    expect(clearButton).not.toBeInTheDocument();
  });
});
