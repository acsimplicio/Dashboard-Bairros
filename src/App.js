import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { DashboardStorage } from "./context/DashboardContext";
import "./styles/App.css";

const App = () => {
  return (
    <div className="page">
      <Header />
      <DashboardStorage>
        <Dashboard />
      </DashboardStorage>
    </div>
  );
};

export default App;
