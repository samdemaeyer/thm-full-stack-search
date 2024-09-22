import { describe, it, expect } from "vitest";
import { getIconClass } from "../iconHelper";

describe("getIconClass", () => {
  it("should return 'fa-building' for 'hotels'", () => {
    expect(getIconClass("hotels")).toBe("fa-building");
  });

  it("should return 'fa-flag' for 'countries'", () => {
    expect(getIconClass("countries")).toBe("fa-flag");
  });

  it("should return 'fa-globe' for 'cities'", () => {
    expect(getIconClass("cities")).toBe("fa-globe");
  });

  it("should return an empty string for an unknown type", () => {
    expect(getIconClass("unknown")).toBe("");
  });
});
