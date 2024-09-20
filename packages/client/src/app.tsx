import { useState, type ChangeEvent } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultsList from "./components/ResultsList/ResultsList";
import {
  fetchAndFilterHotels,
  fetchAndFilterCountries,
  fetchAndFilterCities,
} from "./services/apiService";
import { Hotel, Country, City } from "./types/models";

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [showClearBtn, setShowClearBtn] = useState(false);

  const fetchData = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowClearBtn(!!value);

    if (value === "") {
      setHotels([]);
      setCountries([]);
      setCities([]);
      return;
    }

    const filteredHotels = await fetchAndFilterHotels(value);
    const filteredCountries = await fetchAndFilterCountries(value);
    const filteredCities = await fetchAndFilterCities(value);
    setHotels(filteredHotels);
    setCountries(filteredCountries);
    setCities(filteredCities);
  };

  const clearSearch = () => {
    setSearchValue("");
    setHotels([]);
    setCountries([]);
    setCities([]);
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
