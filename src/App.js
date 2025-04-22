import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./Routing";
import ElectricalComponent from "./components/electricalComponents/ElectricalRouting.jsx";
import SecurityComponent from "./components/securityComponents/SecurityRouting.jsx"; 
import TechnologyComponent from "./components/technologyComponent/TechnologyRouting.jsx";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Routing />} />
          <Route path="/electrical" element={<ElectricalComponent />} />
          <Route path="/security" element={<SecurityComponent />} />
          <Route path="/technology" element={<TechnologyComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
