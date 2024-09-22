// Import necessary testing utilities and components
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // To handle routing in tests
import ResultsList from "../../ResultsList/ResultsList"; // The component being tested

// Describe the test suite for the ResultsList component
describe("ResultsList Component", () => {
  // Test case for when there are no results
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

    // Check for "No hotels matched" message
    const hotelMessages = screen.getAllByText((_, node) =>
      node ? node.textContent?.includes("No hotels matched") ?? false : false
    );
    // Check for "No countries matched" message
    const countryMessages = screen.getAllByText((_, node) =>
      node ? node.textContent?.includes("No countries matched") ?? false : false
    );
    // Check for "No cities matched" message
    const cityMessages = screen.getAllByText((_, node) =>
      node ? node.textContent?.includes("No cities matched") ?? false : false
    );

    // Assert that at least one matching element exists for each category
    expect(hotelMessages.length).toBeGreaterThan(0);
    expect(countryMessages.length).toBeGreaterThan(0);
    expect(cityMessages.length).toBeGreaterThan(0);
  });
});
