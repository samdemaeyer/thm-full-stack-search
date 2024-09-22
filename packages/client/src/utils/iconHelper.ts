// Function to get the Font Awesome icon class based on the type
export const getIconClass = (type: string) => {
  // Mapping of types to their corresponding Font Awesome classes
  const iconMapping: { [key: string]: string } = {
    hotels: "fa-building", // Icon for hotels
    countries: "fa-flag", // Icon for countries
    cities: "fa-globe", // Icon for cities
  };

  // Return the corresponding icon class for the given type, or an empty string if not found
  return iconMapping[type] || "";
};
