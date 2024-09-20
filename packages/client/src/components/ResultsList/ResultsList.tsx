import React from "react";
import { Hotel, Country, City } from "../../types/models";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultList.css";

type Item = Hotel | Country | City;

interface ResultsListProps {
  hotels: Hotel[];
  countries: Country[];
  cities: City[];
  showResults: boolean;
  isLoading: boolean;
  isError: boolean;
}

const ResultsList: React.FC<ResultsListProps> = ({
  hotels,
  countries,
  cities,
  showResults,
  isLoading,
  isError,
}) => {
  if (!showResults) return null;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  const renderList = (items: Item[], type: string) => {
    if (items.length) {
      return items.map((item) => (
        <ResultItem key={item._id} item={item} type={type} />
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
