import React from "react";
import "./SearchBar.css";

type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  showClearBtn: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  showClearBtn,
}) => {
  return (
    <div className="form">
      <i className="fa fa-search"></i>
      <input
        type="text"
        className="form-control form-input"
        placeholder="Search accommodation..."
        value={value}
        onChange={onChange}
      />
      {showClearBtn && (
        <span className="left-pan" onClick={onClear}>
          <i className="fa fa-close"></i>
        </span>
      )}
    </div>
  );
};

export default SearchBar;
