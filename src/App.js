import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar/NavHeader";
import Footer from "./components/Footer";
import AboutDoctor from "./components/About/AboutDoctor";
import AboutHospital from "./components/About/AboutHospital";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog/Blog";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact-us" Component={ContactUs} />

        <Route path="/urologist-in-bhagalpur" Component={AboutDoctor} />
        <Route
          path="/urologist-hospital-in-bhagalpur"
          Component={AboutHospital}
        />
        <Route path="/urologist-blog" Component={Blog} />
        {/* treatments router here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
