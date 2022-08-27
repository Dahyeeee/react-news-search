import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ClippedFeed from "./page/ClippedFeed";
import NewsFeed from "./page/NewsFeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/clip" element={<ClippedFeed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
