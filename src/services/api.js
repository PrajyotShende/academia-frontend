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

    const data = await response.json(); // Parse JSON response
    console.log('JWT Token:', data.token);
    console.log('Student ID:', data.studentId);

    // Save both token and studentId in sessionStorage
    sessionStorage.setItem('authToken', data.token);
    sessionStorage.setItem('studentId', data.studentId);

    return data; // Returning the full response object (with token and studentId)
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
