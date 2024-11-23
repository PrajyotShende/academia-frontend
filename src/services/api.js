// /src/services/api.js

export const login = async (email, password) => {
  const loginUrl = 'http://localhost:8080/api/student/login'; // Replace with your actual login URL

  const loginData = {
    email_id: email,  // Dynamic email provided by user
    Password: password  // Dynamic password provided by user
  };

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // Setting the content type as JSON
      },
      body: JSON.stringify(loginData),  // Converting JavaScript object to JSON string
    });

    if (!response.ok) {
      throw new Error('Login failed: Invalid credentials or server error');
    }

    const data = await response.text();  // Use .text() to capture the plain JWT token
    console.log('JWT Token:', data);

    // Save the token in localStorage or sessionStorage for future requests
    localStorage.setItem('authToken', data);  // Saving token in localStorage

    return data;  // Return the token, in case you need it elsewhere
  } catch (error) {
    console.error('Error during login:', error);
    throw error;  // Throw error to be caught in your component or UI
  }
};
