import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/NavHeader";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
