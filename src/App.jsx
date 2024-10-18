import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./comp/NavBar";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
