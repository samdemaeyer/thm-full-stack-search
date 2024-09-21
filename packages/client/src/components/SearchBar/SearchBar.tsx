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
      <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="text"
        className="form-control form-input"
        placeholder="Search accommodation..."
        value={value}
        onChange={onChange}
        aria-label="Search accommodation"
      />
      {showClearBtn && (
        <button onClick={onClear} aria-label="Clear search">
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
      )}
    </div>
  );
};

export default SearchBar;
