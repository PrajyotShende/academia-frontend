// /src/services/api.js

export const login = async (email, password) => {
  const loginUrl = 'http://localhost:8080/api/student/login';

  const loginData = {
    email_id: email,  
    Password: password  
  };

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Login failed: Invalid credentials or server error');
    }

    const data = await response.text();
    console.log('JWT Token:', data);

    // Use sessionStorage instead of localStorage
    sessionStorage.setItem('authToken', data);

    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
