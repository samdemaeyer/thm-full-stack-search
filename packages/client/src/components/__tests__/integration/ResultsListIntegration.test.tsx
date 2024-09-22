import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ResultsList from "../../ResultsList/ResultsList";
import { Hotel, Country, City } from "../../../types/models";

// Mock the iconHelper module
vi.mock("../../utils/iconHelper", () => ({
  getIconClass: vi.fn((type) => `fa-${type}`),
}));

describe("ResultsList Component Integration", () => {
  const hotels: Hotel[] = [
    {
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
    },
    {
      _id: "2",
      hotel_name: "Another Hotel",
      chain_name: "Another Chain",
      addressline1: "456 Another St",
      addressline2: "",
      zipcode: "67890",
      city: "Another City",
      state: "Another State",
      country: "Another Country",
      countryisocode: "AC",
      star_rating: 4,
    },
  ];

  const countries: Country[] = [
    { _id: "3", country: "Test Country", countryisocode: "TC" },
  ];

  const cities: City[] = [{ _id: "4", name: "Test City" }];

  it("should render hotels, countries, and cities correctly", () => {
    render(
      <BrowserRouter>
        <ResultsList
          hotels={hotels}
          countries={countries}
          cities={cities}
          showResults={true}
          isLoading={false}
          isError={false}
        />
      </BrowserRouter>
    );

    // Check if hotel names are displayed
    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByText("Another Hotel")).toBeInTheDocument();

    // Check if country name is displayed
    expect(screen.getByText("Test Country")).toBeInTheDocument();

    // Check if city name is displayed
    expect(screen.getByText("Test City")).toBeInTheDocument();
  });

  it("should display a message when no results are found", () => {
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

    // Check if the no matches message is displayed
    expect(
      screen.getByText("No hotels matched. Try a different search term.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("No countries matched. Try a different search term.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("No cities matched. Try a different search term.")
    ).toBeInTheDocument();
  });
});
