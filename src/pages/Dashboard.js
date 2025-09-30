import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WidgetCard from "../components/WidgetCard";
import ChartCard from "../components/ChartCard";
import "./Dashboard.css";

function Dashboard({ setIsLoggedIn }) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <div className="widgets">
          <WidgetCard title="Users" value="1,245" />
          <WidgetCard title="Sales" value="$8,230" />
          <WidgetCard title="Orders" value="320" />
          <WidgetCard title="Visits" value="12,540" />
        </div>
        <div className="charts">
          <ChartCard type="pie" />
          <ChartCard type="bar" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
