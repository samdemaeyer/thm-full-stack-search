import React from "react";
import { Hotel, Country, City } from "../../types/models";
import { getIconClass } from "../../utils/iconHelper";
import { Link } from "react-router-dom";
import "./ResultItem.css";

type Item = Hotel | Country | City;

interface ResultItemProps {
  item: Item;
  type: string;
}

const ResultItem: React.FC<ResultItemProps> = React.memo(({ item, type }) => {
  return (
    <li key={item._id}>
      <Link
        to={`/${type}/${item._id}`}
        className="dropdown-item"
        tabIndex={0}
        aria-label={`View details for ${
          type === "hotels"
            ? (item as Hotel).hotel_name
            : type === "countries"
            ? (item as Country).country
            : (item as City).name
        }`}
      >
        <i className={`fa ${getIconClass(type)} mr-2`} aria-hidden="true"></i>
        {type === "hotels"
          ? (item as Hotel).hotel_name
          : type === "countries"
          ? (item as Country).country
          : (item as City).name}
      </Link>
      <hr className="divider" />
    </li>
  );
});

export default ResultItem;
