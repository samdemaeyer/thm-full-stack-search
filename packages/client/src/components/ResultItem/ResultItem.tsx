import React from "react";
import { Hotel, Country, City } from "../../types/models";
import { getIconClass } from "../../utils/iconHelper";
import "./ResultItem.css";

type Item = Hotel | Country | City;

interface ResultItemProps {
  item: Item;
  type: string;
}

const ResultItem: React.FC<ResultItemProps> = React.memo(({ item, type }) => {
  return (
    <li key={item._id}>
      <a href={`/${type}/${item._id}`} className="dropdown-item">
        <i className={`fa ${getIconClass(type)} mr-2`}></i>
        {type === "hotels"
          ? (item as Hotel).hotel_name
          : type === "countries"
          ? (item as Country).country
          : (item as City).name}
      </a>
      <hr className="divider" />
    </li>
  );
});

export default ResultItem;
