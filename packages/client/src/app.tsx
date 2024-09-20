import { useState, type ChangeEvent } from "react";
import { getCodeSandboxHost } from "@codesandbox/utils";

type Hotel = {
  _id: string;
  chain_name: string;
  hotel_name: string;
  city: string;
  country: string;
};

type Country = { _id: string; country: string; countryisocode: string };

type City = { _id: string; name: string };

const codeSandboxHost = getCodeSandboxHost(3001);
const API_URL = codeSandboxHost
  ? `https://${codeSandboxHost}`
  : "http://localhost:3001";

const fetchAndFilterHotels = async (value: string) => {
  const hotelsData = await fetch(`${API_URL}/hotels`);
  const hotels = (await hotelsData.json()) as Hotel[];
  return hotels.filter(
    ({ chain_name, hotel_name, city, country }) =>
      chain_name.toLowerCase().includes(value.toLowerCase()) ||
      hotel_name.toLowerCase().includes(value.toLowerCase()) ||
      city.toLowerCase().includes(value.toLowerCase()) ||
      country.toLowerCase().includes(value.toLowerCase())
  );
};

const fetchAndFilterCountries = async (value: string) => {
  const countriesData = await fetch(`${API_URL}/countries`);
  const countries = (await countriesData.json()) as Country[];
  return countries.filter(
    ({ country, countryisocode }) =>
      countryisocode.toLowerCase().includes(value.toLowerCase()) ||
      country.toLowerCase().includes(value.toLowerCase())
  );
};

const fetchAndFilterCities = async (value: string) => {
  const citiesData = await fetch(`${API_URL}/cities`);
  const cities = (await citiesData.json()) as City[];
  return cities.filter(({ name }) =>
    name.toLowerCase().includes(value.toLowerCase())
  );
};

function App() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [searchValue, setSearchValue] = useState(""); // Track search input
  const [showClearBtn, setShowClearBtn] = useState(false);

  const fetchData = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value); // Update search input state
    setShowClearBtn(!!value); // Show clear button only when there's input

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

  // Handler for clearing search input and results
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
              <div className="form">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search accommodation..."
                  value={searchValue} // Bind input to state
                  onChange={fetchData}
                />
                {showClearBtn && (
                  <span className="left-pan" onClick={clearSearch}>
                    <i className="fa fa-close"></i>
                  </span>
                )}
              </div>
              {!!hotels.length && (
                <div className="search-dropdown-menu dropdown-menu w-100 show p-2">
                  <h2>Hotels</h2>
                  {hotels.length ? (
                    hotels.map((hotel) => (
                      <li key={hotel._id}>
                        <a
                          href={`/hotels/${hotel._id}`}
                          className="dropdown-item"
                        >
                          <i className="fa fa-building mr-2"></i>
                          {hotel.hotel_name}
                        </a>
                        <hr className="divider" />
                      </li>
                    ))
                  ) : (
                    <p>No hotels matched</p>
                  )}
                  <h2>Countries</h2>
                  {countries.length ? (
                    countries.map((country) => (
                      <li key={country._id}>
                        <a
                          href={`/countries/${country._id}`}
                          className="dropdown-item"
                        >
                          <i className="fa fa-flag mr-2"></i>
                          {country.country}
                        </a>
                        <hr className="divider" />
                      </li>
                    ))
                  ) : (
                    <p>No countries matched</p>
                  )}
                  <h2>Cities</h2>
                  {cities.length ? (
                    cities.map((city) => (
                      <li key={city._id}>
                        <a
                          href={`/cities/${city._id}`}
                          className="dropdown-item"
                        >
                          <i className="fa fa-globe mr-2"></i>
                          {city.name}
                        </a>
                        <hr className="divider" />
                      </li>
                    ))
                  ) : (
                    <p>No cities matched</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
