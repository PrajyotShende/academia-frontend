import React, { useState } from 'react';
import { fetchPaidBills, fetchDueBills } from '../services/api';
import '../styles/styles.css';

const Dashboard = ({ onLogout }) => 
{
  const [paidBills, setPaidBills] = useState([]);
  const [dueBills, setDueBills] = useState([]);
  const [view, setView] = useState('');

  const studentId = localStorage.getItem('studentId');  

  const handlePaidBillsClick = async () => 
  {
    try
    {
      const data = await fetchPaidBills(studentId);
      setPaidBills(data);
      setView('paid');  
    } 
    catch(error) 
    {
      console.error('Error fetching paid bills:', error);
    }
  };

  const handleDueBillsClick = async () => 
  {
    try 
    {
      const data = await fetchDueBills(studentId);
      setDueBills(data);
      setView('due');  
    } 
    catch(error) 
    {
      console.error('Error fetching due bills:', error);
    }
  };

  const PaidBillsTable = () => (
    <div>
      <h3>Paid Bills</h3>
      {paidBills.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Description</th>
              <th>Total Fee</th>
              <th>Paid Amount</th>
              <th>Due Amount</th>
              <th>Status</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {paidBills.map((bill) => (
              <tr key={bill.payment_id}>
                <td>{bill.payment_id}</td>
                <td>{bill.description}</td>
                <td>{bill.total_fee}</td>
                <td>{bill.paid_amount}</td>
                <td>{bill.due_amount}</td>
                <td>{bill.status}</td>
                <td>{bill.payment_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No paid bills available.</p>
      )}
    </div>
  );

  const DueBillsTable = () => (
    <div>
      <h3>Due Bills</h3>
      {dueBills.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Description</th>
              <th>Total Fee</th>
              <th>Paid Amount</th>
              <th>Due Amount</th>
            </tr>
          </thead>
          <tbody>
            {dueBills.map((bill) => (
              <tr key={bill.bill_id}>
                <td>{bill.bill_id}</td>
                <td>{bill.description}</td>
                <td>{bill.total_fee}</td>
                <td>{bill.paid_amount}</td>
                <td>{bill.due_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No due bills available.</p>
      )}
    </div>
  );

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <div className="buttons-container">
        <button onClick={handlePaidBillsClick} className="btn">Paid Bills</button>
        <button onClick={handleDueBillsClick} className="btn">Due Bills</button>
        <button onClick={onLogout} className="btn">Logout</button>
      </div>
      
      {view === 'paid' && <PaidBillsTable />}
      {view === 'due' && <DueBillsTable />}
    </div>
  );
};

export default Dashboard;
