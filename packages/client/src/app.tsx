import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:type/:id" element={<ItemDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
