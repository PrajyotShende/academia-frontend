import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the login state to true once the user logs in
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default App;
