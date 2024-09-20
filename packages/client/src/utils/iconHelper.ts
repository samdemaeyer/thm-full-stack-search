export const getIconClass = (type: string) => {
  const iconMapping: { [key: string]: string } = {
    hotels: "fa-building",
    countries: "fa-flag",
    cities: "fa-globe",
  };
  return iconMapping[type] || "";
};
