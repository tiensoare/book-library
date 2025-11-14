import React from "react";
import Navbar from "./NavBar.jsx";
import Home from "./Home.jsx";
import MyBooks from "./MyBooks.jsx";

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Router embedded in a NavBar that directs the user to the target page
 */
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mybooks' element={<MyBooks />} />
      </Routes>
    </Router>
  );
};

export default App;
