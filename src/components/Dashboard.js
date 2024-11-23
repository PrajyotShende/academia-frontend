// import React, { useState, useEffect } from 'react';
// import { getPaidBills, getDueBills } from '../services/api';

// const Dashboard = () => {
//   const [dueBills, setDueBills] = useState([]);
//   const [paidBills, setPaidBills] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');
//   const token = localStorage.getItem('token'); // Get JWT token from localStorage

//   useEffect(() => {
//     if (token) {
//       // Fetch due and paid bills when component mounts
//       getDueBills(token)
//         .then((data) => setDueBills(data))
//         .catch((error) => setErrorMessage('Failed to fetch due bills'));

//       getPaidBills(token)
//         .then((data) => setPaidBills(data))
//         .catch((error) => setErrorMessage('Failed to fetch paid bills'));
//     }
//   }, [token]);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {errorMessage && <p>{errorMessage}</p>}
      
//       <div>
//         <h3>Due Bills</h3>
//         {dueBills.length > 0 ? (
//           <ul>
//             {dueBills.map((bill) => (
//               <li key={bill.billId}>{bill.description}: {bill.amount}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No due bills</p>
//         )}
//       </div>

//       <div>
//         <h3>Paid Bills</h3>
//         {paidBills.length > 0 ? (
//           <ul>
//             {paidBills.map((bill) => (
//               <li key={bill.billId}>{bill.description}: {bill.amount}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No paid bills</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;