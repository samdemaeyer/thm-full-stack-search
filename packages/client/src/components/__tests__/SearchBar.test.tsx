import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import SearchBar from "../SearchBar/SearchBar";

describe("SearchBar Component", () => {
  it("renders the search bar correctly", () => {
    render(
      <SearchBar
        value=""
        onChange={vi.fn()}
        onClear={vi.fn()}
        showClearBtn={false}
      />
    );

    // Check that the input is in the document
    const input = screen.getByPlaceholderText("Search accommodation...");
    expect(input).toBeInTheDocument();

    // Check that the search icon is rendered
    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();

    // Check that the clear button is not rendered
    const clearButton = screen.queryByRole("button", { name: /clear search/i });
    expect(clearButton).not.toBeInTheDocument();
  });
});
