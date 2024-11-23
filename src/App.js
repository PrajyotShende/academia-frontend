import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const studentId = sessionStorage.getItem('studentId');
    if (token && studentId) {
      setIsLoggedIn(true); // If token and studentId are available, set as logged in
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Mark the user as logged in
  };

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('studentId');
    setIsLoggedIn(false);  // Mark the user as logged out
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
