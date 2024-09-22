import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ResultItem from "../../ResultItem/ResultItem"; // Adjust the import path as necessary
import { Hotel, Country, City } from "../../../types/models";

// Mock the iconHelper module
vi.mock("../../../utils/iconHelper", () => ({
  getIconClass: vi.fn((type) => {
    if (type === "hotels") return "fa-hotels";
    if (type === "countries") return "fa-countries";
    if (type === "cities") return "fa-cities";
    return "";
  }),
}));

describe("ResultItem Component Integration", () => {
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

  it("should render hotel item correctly", () => {
    render(
      <BrowserRouter>
        <ResultItem item={hotel} type="hotels" />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/hotels/1");
    expect(
      screen.getByLabelText("View details for Test Hotel")
    ).toBeInTheDocument();
    expect(screen.getByTestId("icon-element")).toHaveClass("fa-hotels");
  });

  it("should render country item correctly", () => {
    render(
      <BrowserRouter>
        <ResultItem item={country} type="countries" />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Country")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/countries/2");
    expect(
      screen.getByLabelText("View details for Test Country")
    ).toBeInTheDocument();
    expect(screen.getByTestId("icon-element")).toHaveClass("fa-countries");
  });

  it("should render city item correctly", () => {
    render(
      <BrowserRouter>
        <ResultItem item={city} type="cities" />
      </BrowserRouter>
    );

    expect(screen.getByText("Test City")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/cities/3");
    expect(
      screen.getByLabelText("View details for Test City")
    ).toBeInTheDocument();
    expect(screen.getByTestId("icon-element")).toHaveClass("fa-cities");
  });
});
