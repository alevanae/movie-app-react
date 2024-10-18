import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./comp/NavBar";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  return (
    <Router basename="/movie-app-react">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
