import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ResultsList from "../ResultsList/ResultsList";

describe("ResultsList Component", () => {
  it("should show no match message when there are no results", () => {
    render(
      <BrowserRouter>
        <ResultsList
          hotels={[]}
          countries={[]}
          cities={[]}
          showResults={true}
          isLoading={false}
          isError={false}
        />
      </BrowserRouter>
    );

    // Use getAllByText with explicit return type (true/false)
    const hotelMessages = screen.getAllByText((_, node) =>
      node ? node.textContent?.includes("No hotels matched") ?? false : false
    );
    const countryMessages = screen.getAllByText((_, node) =>
      node ? node.textContent?.includes("No countries matched") ?? false : false
    );
    const cityMessages = screen.getAllByText((_, node) =>
      node ? node.textContent?.includes("No cities matched") ?? false : false
    );

    // Assert that at least one matching element exists for each category
    expect(hotelMessages.length).toBeGreaterThan(0);
    expect(countryMessages.length).toBeGreaterThan(0);
    expect(cityMessages.length).toBeGreaterThan(0);
  });
});
