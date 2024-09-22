import { describe, it, expect } from "vitest"; // Import testing utilities
import { getIconClass } from "../../iconHelper"; // Import the function to test

describe("getIconClass", () => {
  // Test case for 'hotels'
  it("should return 'fa-building' for 'hotels'", () => {
    expect(getIconClass("hotels")).toBe("fa-building"); // Assert the expected class name for hotels
  });

  // Test case for 'countries'
  it("should return 'fa-flag' for 'countries'", () => {
    expect(getIconClass("countries")).toBe("fa-flag"); // Assert the expected class name for countries
  });

  // Test case for 'cities'
  it("should return 'fa-globe' for 'cities'", () => {
    expect(getIconClass("cities")).toBe("fa-globe"); // Assert the expected class name for cities
  });

  // Test case for an unknown type
  it("should return an empty string for an unknown type", () => {
    expect(getIconClass("unknown")).toBe(""); // Assert that unknown types return an empty string
  });
});
