// Import necessary testing utilities and the component to be tested
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // For testing components that use routing
import ResultItem from "../../ResultItem/ResultItem"; // The component being tested
import { Hotel, Country, City } from "../../../types/models"; // Type definitions for props

// Mock the iconHelper module to control the output of the getIconClass function
vi.mock("../../../utils/iconHelper", () => ({
  getIconClass: vi.fn((type) => `fa-${type}`), // Return a class name based on type
}));

// Describe the test suite for the ResultItem component
describe("ResultItem Component", () => {
  // Sample hotel, country, and city data for testing
  const hotel: Hotel = {
    _id: "1",
    hotel_name: "Test Hotel",
    chain_name: "Test Chain",
    addressline1: "123 Test St",
    addressline2: "Apt 456",
    zipcode: "12345",
    city: "Test City",
    state: "Test State",
    country: "Test Country",
    countryisocode: "TC",
    star_rating: 5,
  };

  const country: Country = {
    _id: "2",
    country: "Test Country",
    countryisocode: "TC",
  };

  const city: City = {
    _id: "3",
    name: "Test City",
  };

  // Test case for rendering hotel information
  it("should render the hotel name correctly", () => {
    render(
      <BrowserRouter>
        <ResultItem item={hotel} type="hotels" />
      </BrowserRouter>
    );

    // Check if the hotel name is displayed
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    // Check if the link has the correct href
    expect(screen.getByRole("link")).toHaveAttribute("href", "/hotels/1");
    // Check for the accessibility label
    expect(
      screen.getByLabelText("View details for Test Hotel")
    ).toBeInTheDocument();
  });

  // Test case for rendering country information
  it("should render the country name correctly", () => {
    render(
      <BrowserRouter>
        <ResultItem item={country} type="countries" />
      </BrowserRouter>
    );

    // Check if the country name is displayed
    expect(screen.getByText("Test Country")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/countries/2");
    expect(
      screen.getByLabelText("View details for Test Country")
    ).toBeInTheDocument();
  });

  // Test case for rendering city information
  it("should render the city name correctly", () => {
    render(
      <BrowserRouter>
        <ResultItem item={city} type="cities" />
      </BrowserRouter>
    );

    // Check if the city name is displayed
    expect(screen.getByText("Test City")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/cities/3");
    expect(
      screen.getByLabelText("View details for Test City")
    ).toBeInTheDocument();
  });

  // Test case for rendering the correct icon based on item type
  it("should render the correct icon based on type", () => {
    render(
      <BrowserRouter>
        <ResultItem item={hotel} type="hotels" />
      </BrowserRouter>
    );

    // Check if the icon has the correct class based on type
    expect(screen.getByTestId("icon-element")).toHaveClass("fa-hotels");
  });
});
