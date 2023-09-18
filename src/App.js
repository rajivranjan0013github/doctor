import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar/NavHeader";
import Footer from "./components/Footer";
import AboutDoctor from "./components/About/AboutDoctor";
// import AboutHospital from "./components/About/AboutHospital";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog/Blog";
import TreatmentDetail from "./subcomponents/treatment/treatmentDetail/TreatmentDetail";
import SideNavbar from "./components/sideNavbar/SideNavbar";
import Treatments from "./subcomponents/treatment/Treatments";
import BlogPage from "./components/Blog/BlogPage";
import Appointment from "./components/Appointment";
import Success from "./components/Success";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SideNavbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact-us" Component={ContactUs} />

        <Route path="/urologist-in-bhagalpur" Component={AboutDoctor} />

        <Route path="/urologist-blog" Component={Blog} />
        {/* treatments router here */}
        <Route path="/services" Component={Treatments} />

        <Route path="/appointment" Component={Appointment} />
        <Route path="/success" Component={Success} />

        <Route path="/:treatmentName" Component={TreatmentDetail} />
        <Route path="/urologist-blog/:BlogName" Component={BlogPage} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
