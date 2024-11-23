// /src/components/Dashboard.js

import React from 'react';
import '../styles/styles.css'; // Corrected path to styles.css

const Dashboard = ({ onLogout }) => {
  const handlePaidBillsClick = () => {
    console.log('Paid Bills button clicked');
    // Add logic to fetch and display paid bills
  };

  const handleDueBillsClick = () => {
    console.log('Due Bills button clicked');
    // Add logic to fetch and display due bills
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <div className="buttons-container">
        <button onClick={handlePaidBillsClick} className="btn">Paid Bills</button>
        <button onClick={handleDueBillsClick} className="btn">Due Bills</button>
        <button onClick={onLogout} className="btn">Logout</button>  {/* Logout button */}
      </div>
    </div>
  );
};

export default Dashboard;
