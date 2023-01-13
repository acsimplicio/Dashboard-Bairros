import React from "react";
import "../styles/Dashboard.css";
import MapChart from "./MapChart";
import NeighborhoodChart from "./NeighborhoodChart";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <MapChart />
      <NeighborhoodChart />
    </section>
  );
};

export default Dashboard;
