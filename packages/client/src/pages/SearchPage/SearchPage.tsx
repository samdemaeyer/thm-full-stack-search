import MetaTags from "../../components/MetaTags/MetaTags";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import { useSearchLogic } from "../../hooks/useSearchLogic";

const SearchPage = () => {
  const debounceDelay = 50; // Set debounce delay for search input

  // Use the custom hook to manage the search logic
  const {
    searchValue, // Current value of the search input
    fetchData, // Function to handle input changes
    clearSearch, // Function to clear the search input
    hotels, // List of hotels fetched based on search
    countries, // List of countries fetched based on search
    cities, // List of cities fetched based on search
    isLoading, // Loading state for the fetched data
    isError, // Error state for the fetched data
  } = useSearchLogic("", debounceDelay); // Initialize search logic with empty initial value

  return (
    <div className="App">
      <MetaTags
        title="Find Your Next Adventure - Search"
        description="Search for hotels, countries, and cities to plan your next adventure."
        url={window.location.href}
        image="URL_TO_YOUR_IMAGE"
        type="website"
      />
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <h1 className="text-white text-center mb-3">
              Find your next adventure
            </h1>
            <div className="dropdown">
              <SearchBar
                value={searchValue} // Bind current search value
                onChange={fetchData} // Update input value on change
                onClear={clearSearch} // Clear input on button click
                showClearBtn={searchValue.length > 0} // Show clear button if input is not empty
              />
              {/* ResultsList to display fetched results */}
              <ResultsList
                hotels={hotels} // Pass hotels to ResultsList
                countries={countries} // Pass countries to ResultsList
                cities={cities} // Pass cities to ResultsList
                showResults={!!searchValue} // Show results only if there is a search value
                isLoading={isLoading} // Pass loading state
                isError={isError} // Pass error state
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage; // Export the SearchPage component
