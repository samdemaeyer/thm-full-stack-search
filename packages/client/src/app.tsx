import { HelmetProvider } from "react-helmet-async";
import SearchPage from "./pages/SearchPage/SearchPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:type/:id" element={<ItemDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
