// /src/App.js

import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token and studentId are already present in sessionStorage when the app loads
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const studentId = sessionStorage.getItem('studentId');
    if (token && studentId) {
      setIsLoggedIn(true); // Token and studentId exist, mark as logged in
    }
  }, []);  // Empty dependency array means this runs once when the component mounts

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set the login state to true once the user logs in
  };

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');  // Clear the token from sessionStorage
    sessionStorage.removeItem('studentId');  // Clear the studentId from sessionStorage
    setIsLoggedIn(false);  // Update state to log out the user
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
