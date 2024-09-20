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
      <Link to={`/${type}/${item._id}`} className="dropdown-item">
        {" "}
        {/* Use Link instead of a */}
        <i className={`fa ${getIconClass(type)} mr-2`}></i>
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
