import React from "react";
import "./App.css";
import Services from "./components/Services/Services";
import Project from "./components/Project/Project";
import Estab from "./components/Established/Estab";

import Aboutus from "./components/Aboutus/Aboutus";
import Footer from "./components/Footer/Footer";
import Fpage from "./components/Fpage/Fpage";
import Navbar from "./components/Navbar/Navbar";
import ClientReviews from "./components/ClientReviews/ClientReviews";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Fpage />

      <Aboutus />
      <Services />
      <Project />
      <ClientReviews />
      <Estab />
      <Footer />
    </div>
  );
};

export default App;
