import SEO from "../../components/SEO/SEO";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import { useSearchLogic } from "../../hooks/useSearchLogic";
import "./SearchPage.css";

const SearchPage = () => {
  const debounceDelay = 200;

  // Use the custom hook to manage the search logic
  const {
    searchValue,
    fetchData,
    clearSearch,
    hotels,
    countries,
    cities,
    isLoading,
    isError,
  } = useSearchLogic("", debounceDelay);

  // Display loading message if data is being fetched
  if (isLoading) {
    return <div className="loading-message">Loading...</div>;
  }

  // Display error message if something goes wrong
  if (isError) {
    return (
      <div className="error-message">An error occurred. Please try again.</div>
    );
  }

  return (
    <div className="App">
      <SEO
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
                value={searchValue}
                onChange={fetchData}
                onClear={clearSearch}
                showClearBtn={searchValue.length > 0} // Using length to control the visibility of the clear button
              />
              <ResultsList
                hotels={hotels}
                countries={countries}
                cities={cities}
                showResults={!!searchValue}
                isLoading={isLoading}
                isError={isError}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
