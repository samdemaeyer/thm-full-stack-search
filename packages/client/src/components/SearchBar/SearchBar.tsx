import React from "react";
import "./SearchBar.css";

// Defining the props for the SearchBar component
type SearchBarProps = {
  value: string; // Controlled input value
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler for input changes
  onClear: () => void; // Handler for clearing the search input
  showClearBtn: boolean; // Flag to determine if the clear button should be displayed
};

// SearchBar component
const SearchBarComponent: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClear,
  showClearBtn,
}) => {
  return (
    <div className="form">
      {" "}
      {/* Main container for the search bar */}
      <i
        className="fa fa-search"
        aria-hidden="true" // Hides the icon from assistive technologies
        data-testid="search-icon" // Test ID for easy querying in tests
      ></i>
      <input
        type="text"
        className="form-control form-input"
        placeholder="Search accommodation..."
        value={value} // Controlled input value
        onChange={onChange} // Handler for input changes
        aria-label="Search accommodation" // Accessibility label for screen readers
      />
      {showClearBtn && ( // Conditional rendering of the clear button
        <button onClick={onClear} aria-label="Clear search">
          <i
            className="fa fa-close"
            aria-hidden="true" // Hides the icon from assistive technologies
            data-testid="clear-icon" // Test ID for easy querying in tests
          ></i>
        </button>
      )}
    </div>
  );
};

// Memoizing the component to prevent unnecessary re-renders
const SearchBar = React.memo(SearchBarComponent);
SearchBar.displayName = "SearchBar"; // Explicitly set the display name for React.memo

export default SearchBar; // Exporting the component for use in other files
