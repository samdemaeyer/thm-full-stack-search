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

# TryHackMe Challenge Notes

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

## Conclusion
I documented the steps I took to evaluate my mindset and improve my expertise in React, allowing me to reflect on my process and identify any potential areas for improvement.


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
