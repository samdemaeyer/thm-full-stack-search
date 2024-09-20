import React from "react";
import { Hotel, Country, City } from "../../types/models";
import "./ResultList.css";

type Item = Hotel | Country | City;

interface ResultsListProps {
  hotels: Hotel[];
  countries: Country[];
  cities: City[];
  showResults: boolean;
}

const ResultsList: React.FC<ResultsListProps> = ({
  hotels,
  countries,
  cities,
  showResults,
}) => {
  if (!showResults) return null;

  const renderList = (items: Item[], type: string) => {
    if (items.length) {
      return items.map((item) => (
        <li key={item._id}>
          <a href={`/${type}/${item._id}`} className="dropdown-item">
            <i
              className={`fa fa-${
                type === "hotels"
                  ? "building"
                  : type === "countries"
                  ? "flag"
                  : "globe"
              } mr-2`}
            ></i>
            {type === "hotels"
              ? item.hotel_name
              : type === "countries"
              ? item.country
              : item.name}
          </a>
          <hr className="divider" />
        </li>
      ));
    }
    return <p>No {type.slice(0, -1)} matched</p>;
  };

  return (
    <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
      <h2>Hotels</h2>
      {renderList(hotels, "hotels")}
      <h2>Countries</h2>
      {renderList(countries, "countries")}
      <h2>Cities</h2>
      {renderList(cities, "cities")}
    </div>
  );
};

export default ResultsList;
