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
import TreatmentDetail from "./subcomponents/treatment/treatmentDetail/TreatmentDetail";
import SideNavbar from "./components/sideNavbar/SideNavbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SideNavbar/>
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
        <Route path="/:treatmentName" Component={TreatmentDetail} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
