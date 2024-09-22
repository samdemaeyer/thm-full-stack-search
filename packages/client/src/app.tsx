import { HelmetProvider } from "react-helmet-async"; // For managing SEO and metadata
import SearchPage from "./pages/SearchPage/SearchPage"; // Main search page component
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage"; // Detail page for specific items
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router components for navigation

function App() {
  return (
    <HelmetProvider>
      {" "}
      {/* Provide context for Helmet to manage document head */}
      <Router>
        {" "}
        {/* Wrap the application in Router for routing capabilities */}
        <Routes>
          {" "}
          {/* Define the routes for the application */}
          <Route path="/" element={<SearchPage />} />{" "}
          {/* Route for the search page */}
          <Route path="/:type/:id" element={<ItemDetailPage />} />{" "}
          {/* Route for item detail pages */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App; // Export the App component for use in the main entry file
