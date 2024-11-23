import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token is already present in localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); // Token exists, mark as logged in
    }
  }, []);  // Empty dependency array means this runs once when the component mounts

  const handleLogin = () => {
    setIsLoggedIn(true);  // Set the login state to true once the user logs in
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');  // Clear the token from localStorage
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
