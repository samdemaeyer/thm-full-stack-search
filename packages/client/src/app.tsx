import { HelmetProvider } from "react-helmet-async";
import SearchPage from "./pages/SearchPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:type/:id" element={<ItemDetailPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
