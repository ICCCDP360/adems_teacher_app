import React from "react";

import DashboardContent from "./DashboardContent";
import DashboardHeader from "./DashboardHeader";
import "./styles/Dashboard.scss";

function Dashboard() {
  return (
    <div className="header-dashboard">
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}

export default Dashboard;
