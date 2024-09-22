# Accommodation Search

## Technical Coding Test

This project has a simple setup with an api, hooked up to MongoDB and a frontend piece initiated with [vite](https://vitejs.dev/).

## Install and run

From the project root:

```
npm install
```

### Run

Once install has finished, you can use the following to run both the API and UI:

```
npm run start
```

### API

To run the API separately, navigate to the `./packages/api` folder

```
$ cd packages/api
```

And run the `api` server with

```
$ npm run dev
```

The API should start at http://localhost:3001

### Client

To run the `client` server separately, navigate to the `./packages/client` folder

```
$ cd ./packages/client
```

And run the `client` with

```
$ npm run start
```

The UI should start at http://localhost:3000

### Database connection & environment variables

By default, the code is set up to start and seed a MongoDB in-memory server, which should be sufficient for the test. The database URL will be logged on startup, and the seed data can be found at ./packages/api/db/seeds.

If this setup does not work for you or if you prefer to use your own MongoDB server, you can create a .env file. In the ./packages/api folder, create a .env file (or rename the existing .env.sample) and fill in the environment variables.

## Task at hand

When the project is up and running, you should see a search-bar on the screen. This one is currently hooked up to the `/hotels` endpoint.
When you type in a partial string that is part of the name of the hotel, it should appear on the screen.
Ie. type in `resort` and you should see some Hotels where the word `resort` is present.

You will also see 2 headings called **"Countries"** and **"Cities"**.

The assignment is to build a performant way to search for Hotels, Cities or Countries.
Partial searches will be fine. Hotels will need to filterable by location as well.
Ie. The search `uni` should render

- Hotels that are located in the United States, United Kingdom or have the word `uni` in the hotel name.
- Countries that have `uni` in their name Ie. United States, United Kingdom
- No Cities as there is no match

Clicking the close button within the search field should clear out the field and results.

When clicking on one of the `Hotels`, `Cities` or `Countries` links, the application should redirect to the relevant page and render the selected `Hotel`, `City` or `Country` as a heading.

### Limitations

Given the time constraints, we do not expect a fully production-ready solution. We're primarily interested in the approach and the overall quality of the solution. 
Feel free to modify the current codebase as needed, including adding or removing dependencies. 
For larger or more time-intensive changes, you're welcome to outline your ideas in the write-up section below and discuss them further during the call.

<img src="./assets/search-example.png" width="400px" />

### Write-up

<!-- Write-up/conclusion section -->

## Setup
1. Fork the repo
2. Clone it
3. Run `npm install`
4. Ensure it runs on `npm run start`

## Features Implemented
- **Add new endpoints for cities and countries**  
  [PR #1](https://github.com/Karaterzidi/thm-full-stack-search/pull/1)
  
- **Fetch country and city results and display them on the search bar based on user input**  
  [PR #2](https://github.com/Karaterzidi/thm-full-stack-search/pull/2)

- **Clear search field and results when clicking the close button**  
  [PR #3](https://github.com/Karaterzidi/thm-full-stack-search/pull/3)

- **Create reusable component for the search bar and its CSS**  
  [PR #4](https://github.com/Karaterzidi/thm-full-stack-search/pull/4)

- **Separation of concerns: Created apiService to handle data fetching and filtering for hotels, cities, and countries**  
  [PR #5](https://github.com/Karaterzidi/thm-full-stack-search/pull/5)

- **Create reusable component for the ResultList and its CSS**  
  [PR #6](https://github.com/Karaterzidi/thm-full-stack-search/pull/6)  
  [PR #7](https://github.com/Karaterzidi/thm-full-stack-search/pull/7)

- **Cleaned unused CSS**  
  [PR #8](https://github.com/Karaterzidi/thm-full-stack-search/pull/8)

- **Refactor ResultList component**  
  [PR #9](https://github.com/Karaterzidi/thm-full-stack-search/pull/9)

- **Separation of concerns: Created models.ts**  
  [PR #10](https://github.com/Karaterzidi/thm-full-stack-search/pull/10)

- **Removed missing logos to fix console errors**  
  [PR #11](https://github.com/Karaterzidi/thm-full-stack-search/pull/11)

- **Refactored data fetching logic into a custom hook `useSearchData`**  
  [PR #12](https://github.com/Karaterzidi/thm-full-stack-search/pull/12)

- **Import models in apiService**  
  [PR #13](https://github.com/Karaterzidi/thm-full-stack-search/pull/13)

- **Moved API URL configuration logic to a separate `apiConstants.ts` file**  
  [PR #14](https://github.com/Karaterzidi/thm-full-stack-search/pull/14)

- **Installed `react-router-dom` for dynamic routing**  

- **Moved search to a SearchPage component**  
  [PR #15](https://github.com/Karaterzidi/thm-full-stack-search/pull/15)

- **React Query integration**  
  [PR #16](https://github.com/Karaterzidi/thm-full-stack-search/pull/16)

- **Refactored result list icons by creating a helper**  
  [PR #17](https://github.com/Karaterzidi/thm-full-stack-search/pull/17)

- **Memoized result items**  
  [PR #18](https://github.com/Karaterzidi/thm-full-stack-search/pull/18)

- **Implemented a single page for the details of each country, hotel, and city**  
  [PR #19](https://github.com/Karaterzidi/thm-full-stack-search/pull/19)

- **Implemented a 404 page for non-existent routes with a user-friendly message and a call-to-action to return to the homepage**  
  [PR #20](https://github.com/Karaterzidi/thm-full-stack-search/pull/20)

- **Enhancements to ItemDetailPage and added a CTA button to return to homepage**  
  [PR #21](https://github.com/Karaterzidi/thm-full-stack-search/pull/21)

- **Updated styling for the 'no matches' message to align with the rest of results**  
- **Added an h1 element to the homepage for improved semantic structure**  
  [PR #22](https://github.com/Karaterzidi/thm-full-stack-search/pull/22)

- **Implement debounce functionality for the search input to improve performance and reduce unnecessary API calls.**  
  [PR #23](https://github.com/Karaterzidi/thm-full-stack-search/pull/23)

- **Implemented initial accessibility improvements across various components.**  
  [PR #24](https://github.com/Karaterzidi/thm-full-stack-search/pull/24)

- **Created a SEO component using react-helmet-async to set dynamic metadata across pages.**  
  [PR #25](https://github.com/Karaterzidi/thm-full-stack-search/pull/25)

- **Update apple-touch-icon in index.html.**  
  [PR #26](https://github.com/Karaterzidi/thm-full-stack-search/pull/26)

- **Removed the unnecessary React import from app.tsx as it's no longer needed with the React 17+ JSX transform.**  
  [PR #27](https://github.com/Karaterzidi/thm-full-stack-search/pull/27)

- **Preload external styles to prevent FOUC.**  
  [PR #28](https://github.com/Karaterzidi/thm-full-stack-search/pull/28)

- **Used interfaces instead of types ony my models.**  
  [PR #29]( https://github.com/Karaterzidi/thm-full-stack-search/pull/29)

- **Refactored the debounce delay in SearchPage to be a configurable prop.**  
  [PR #30]( https://github.com/Karaterzidi/thm-full-stack-search/pull/30)

 - **Created a new useSearchLogic hook to encapsulate search input state management, debouncing, and data fetching.**  
  [PR #31]( https://github.com/Karaterzidi/thm-full-stack-search/pull/31)

 - **Moved the toLowerCase() logic out of the fetch functions and into the useSearchData hook.**  
  [PR #32]( https://github.com/Karaterzidi/thm-full-stack-search/pull/32)

 - **Applied React.memo to SearchBar and ResultsList components.**  
  [PR #33]( https://github.com/Karaterzidi/thm-full-stack-search/pull/33)
 
 - **Fix debounce search logic hook.**  
  [PR #34]( https://github.com/Karaterzidi/thm-full-stack-search/pull/34)

 - **Added unit tests.**  
  [PR #35]( https://github.com/Karaterzidi/thm-full-stack-search/pull/35)
  [PR #36]( https://github.com/Karaterzidi/thm-full-stack-search/pull/36)
  [PR #37]( https://github.com/Karaterzidi/thm-full-stack-search/pull/37)
  [PR #38]( https://github.com/Karaterzidi/thm-full-stack-search/pull/38)

 - **Remove unused CSS file.**  
  [PR #39]( https://github.com/Karaterzidi/thm-full-stack-search/pull/39)

 - **Add comments in the code for clarity.**  
  [PR #34]( https://github.com/Karaterzidi/thm-full-stack-search/pull/40)

 - **Organize the folders for unit tests.**  
  [PR #41]( https://github.com/Karaterzidi/thm-full-stack-search/pull/41)

 - **Add integration tests.**  
  [PR #43]( https://github.com/Karaterzidi/thm-full-stack-search/pull/43)

- **Fix dependency issue.**  
  [PR #44]( https://github.com/Karaterzidi/thm-full-stack-search/pull/44)


## General Improvements / Observations

- **Tests**: Implemented unit and integration tests.

To run unit tests in client: `npm run --workspace client test:unit`  
To run integration tests in client: `npm run --workspace client test:integration`  
To run all tests: `npm test`  

- **React.memo Optimization**: Applied `React.memo` to key components (`SearchBar` and `ResultsList`) to prevent unnecessary re-renders and improve performance.
- **Centralized Debounce Logic**: Introduced a new hook `useSearchLogic` to centralize state management, debouncing, and data fetching, simplifying the `SearchPage` component.
- **React Query Integration**: Improved data fetching and state management by introducing `React Query` for caching, synchronization, and error handling.

  
## API Enhancements

- **Improved API Data Fetching**: Refactored the search functions to move repeated logic like `toLowerCase()` to one place, improving efficiency and code readability.
  
## Frontend Enhancements

- **React Helmet SEO Management**: Integrated `react-helmet-async` to manage metadata dynamically for each page, enhancing SEO and social sharing capabilities.
- **Improved Accessibility**: Added `aria-labels` and semantic elements to improve accessibility for all users.
- **Debounce Implementation**: Added a debounce mechanism to optimize the search input, reducing unnecessary API calls and improving performance.
- **Enhanced Search Experience**: Improved search functionality to provide a more responsive and dynamic experience when filtering results.
  
## Suggestions for the future

- **Externalized API Configuration**: Suggested moving API configurations, such as `API_URL`, to a `.env` file for better environment-specific management and security.
- **E2E Testing**: I would love to had implemented also e2e testing to ensure the entire application flow works as expected. While I don't have expertise in this area yet, I believe it would be beneficial for improving the quality and reliability of the project.
- **Search Filters**: A possible future enhancement could be to add filters for the search functionality, allowing users to filter results by category (e.g., hotels, countries, or cities). This would provide a more refined search experience and allow users to quickly find what they are looking for.

## Installation

To install the project dependencies, run the following command:

`npm install --legacy-peer-deps`

The `--legacy-peer-deps` flag allows npm to bypass strict peer dependency checks, helping to resolve conflicts that can occur when libraries expect different versions of shared dependencies, as is the case with `@testing-library/react-hooks`. This is a temporary workaround that enables you to install all necessary packages while maintaining the project's functionality.



I documented the steps I took to evaluate my mindset and improve my expertise in React, allowing me to reflect on my process and identify any potential areas for improvement. I also I have written comments throughout the code to explain the rationale behind my decisions and to provide clarity.



### Database structure

#### Hotels Collection

```json
[
  {
    "chain_name": "Samed Resorts Group",
    "hotel_name": "Sai Kaew Beach Resort",
    "addressline1": "8/1 Moo 4 Tumbon Phe Muang",
    "addressline2": "",
    "zipcode": "21160",
    "city": "Koh Samet",
    "state": "Rayong",
    "country": "Thailand",
    "countryisocode": "TH",
    "star_rating": 4
  },
  {
    /* ... */
  }
]
```

#### Cities Collection

```json
[
  { "name": "Auckland" },
  {
    /* ... */
  }
]
```

#### Countries Collection

```json
[
  {
    "country": "Belgium",
    "countryisocode": "BE"
  },
  {
    /* ... */
  }
]
```
