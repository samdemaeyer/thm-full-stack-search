import { API_URL } from "./apiConstants";

export const fetchDetails = async (
  type: "hotels" | "countries" | "cities",
  id: string
) => {
  const response = await fetch(`${API_URL}/${type}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch details");
  }
  return response.json();
};
