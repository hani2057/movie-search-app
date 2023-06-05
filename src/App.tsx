import { Routes, Route } from "react-router-dom";

import { SearchPage } from "./pages/search-page";
import { FavoritePage } from "./pages/favorite-page";
import { NotFoundPage } from "./pages/not-found-page";
import { TabBar } from "./components/tab-bar";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="/favorite" element={<FavoritePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <TabBar />
    </>
  );
}

export default App;
