import { useState, type ChangeEvent } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ResultsList from "../components/ResultsList/ResultsList";
import useSearchData from "../hooks/useSearchData";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showClearBtn, setShowClearBtn] = useState(false);
  const { hotels, countries, cities, isLoading, isError } =
    useSearchData(searchValue);

  const fetchData = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowClearBtn(!!value);
  };

  const clearSearch = () => {
    setSearchValue("");
    setShowClearBtn(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="dropdown">
              <SearchBar
                value={searchValue}
                onChange={fetchData}
                onClear={clearSearch}
                showClearBtn={showClearBtn}
              />
              <ResultsList
                hotels={hotels}
                countries={countries}
                cities={cities}
                showResults={!!searchValue}
                isLoading={isLoading} // New prop
                isError={isError} // New prop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
