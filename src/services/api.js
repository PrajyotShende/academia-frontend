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

    const data = await response.json();
    console.log('JWT Token:', data.token);
    console.log('Student ID:', data.studentId);

    sessionStorage.setItem('authToken', data.token);
    sessionStorage.setItem('studentId', data.studentId);

    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const fetchPaidBills = async (studentId) => {
  const token = sessionStorage.getItem('authToken');
  const url = `http://localhost:8080/api/student/${studentId}/paid-bills`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch paid bills');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching paid bills:', error);
    throw error;
  }
};

export const fetchDueBills = async (studentId) => {
  const token = sessionStorage.getItem('authToken');
  const url = `http://localhost:8080/api/student/${studentId}/due-bills`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch due bills');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching due bills:', error);
    throw error;
  }
};
