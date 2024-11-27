import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => 
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => 
  {
  
    const token = localStorage.getItem('authToken');

    const studentId = localStorage.getItem('studentId');
    
    if (token && studentId) 
    {
      setIsLoggedIn(true);
    }

  }, []);

  const handleLogin = () => 
  {
    setIsLoggedIn(true);  
  };

  const handleLogout = () => 
  {
    localStorage.removeItem('authToken');
    localStorage.removeItem('studentId');
    setIsLoggedIn(false);  
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )
      }
    </div>
  );
};

export default App;
