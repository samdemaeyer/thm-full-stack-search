import React from "react";
import "./ResultList.css";

type Hotel = {
  _id: string;
  hotel_name: string;
};

type Country = {
  _id: string;
  country: string;
};

type City = {
  _id: string;
  name: string;
};

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
  if (!showResults) return null; // Don't render if showResults is false

  return (
    <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
      <h2>Hotels</h2>
      {hotels.length ? (
        hotels.map((hotel) => (
          <li key={hotel._id}>
            <a href={`/hotels/${hotel._id}`} className="dropdown-item">
              <i className="fa fa-building mr-2"></i>
              {hotel.hotel_name}
            </a>
            <hr className="divider" />
          </li>
        ))
      ) : (
        <p>No hotels matched</p>
      )}
      <h2>Countries</h2>
      {countries.length ? (
        countries.map((country) => (
          <li key={country._id}>
            <a href={`/countries/${country._id}`} className="dropdown-item">
              <i className="fa fa-flag mr-2"></i>
              {country.country}
            </a>
            <hr className="divider" />
          </li>
        ))
      ) : (
        <p>No countries matched</p>
      )}
      <h2>Cities</h2>
      {cities.length ? (
        cities.map((city) => (
          <li key={city._id}>
            <a href={`/cities/${city._id}`} className="dropdown-item">
              <i className="fa fa-globe mr-2"></i>
              {city.name}
            </a>
            <hr className="divider" />
          </li>
        ))
      ) : (
        <p>No cities matched</p>
      )}
    </div>
  );
};

export default ResultsList;
