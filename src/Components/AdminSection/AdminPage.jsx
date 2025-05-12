import React, { useState, useEffect } from 'react';
import './AdminPage.css';
import calculator from '../Assets/calculator.jpg';
import marcos from '../Assets/marcos.jpg';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import axios from 'axios';

const transactions = [
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 5, 2025', price: '100.00' },
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 4, 2025', price: '100.00' },
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 4, 2025', price: '100.00' },
  { image: 'calculator.jpg', name: 'Calculator', date: 'May 4, 2025', price: '100.00' },
];

const recentActivity = [
  { profileImage: 'marcos.jpg', renterName: 'John Doe', itemTitle: 'Calculator', datePosted: 'May 9, 2025' },
  { profileImage: 'marcos.jpg', renterName: 'Jane Smith', itemTitle: 'Lab gown', datePosted: 'May 8, 2025' },
  { profileImage: 'marcos.jpg', renterName: 'Alice Johnson', itemTitle: 'Calculus Book', datePosted: 'May 7, 2025' },
  { profileImage: 'marcos.jpg', renterName: 'Bob Brown', itemTitle: 'Arnis Stick', datePosted: 'May 6, 2025' },
];

const AdminPage = () => {
  const [earnings, setEarnings] = useState({
    totalEarningsThisWeek: 0,
    totalRevenueThisMonth: 0,
  });

  const [users, setUsers] = useState({
    total: 0,
    thisWeek: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/earnings');
        setEarnings({
          totalEarningsThisWeek: response.data.totalEarningsThisWeek,
          totalRevenueThisMonth: response.data.totalRevenueThisMonth,
        });
      } catch (error) {
        console.error('Error fetching earnings:', error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/stats/users');
        setUsers({
          total: response.data.total,
          thisWeek: response.data.thisWeek,
          thisMonth: response.data.thisMonth,
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchEarnings();
    fetchUsers();
  }, []);

  return (
    <div className="cardGrid">
      {/* Earnings Card */}
      <article className="card earningsCard">
        <div className="cardContent">
          <div className="column2">
            <div className="statContainer">
              <div className="statHeader">
                <div className="iconAndTitle">
                  <CurrencyDollarIcon className="earningIcon" />
                  <h2 className="earnings">Earnings Overview</h2>
                </div>
              </div>
              <div className="statBodyGrid">
                <div className="statGroup">
                  <span className="subtitle">Total Earnings This Week</span>
                  <p className="statValue">₱{earnings.totalEarningsThisWeek.toLocaleString()}</p>
                </div>
                <div className="statGroup">
                  <span className="subtitle">Total Revenue This Month</span>
                  <p className="statValue">₱{earnings.totalRevenueThisMonth.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Users Card */}
      <article className="card">
        <div className="cardContent">
          <div className="column2">
            <div className="statContainer">
              <div className="statHeader">
                <div className="statHeaderText">
                  <div className="iconAndTitle">
                    <UserGroupIcon className="earningIcon" />
                    <h2 className="earnings">Users</h2>
                  </div>
                </div>
              </div>
              <div className="statBodyUsers">
                <div className="statLeftUsers">
                  <span className="subtitle">Total Users</span>
                  <p className="statValue">{users.total}</p>

                  <span className="subtitle">This Week</span>
                  <p className="statValue">{users.thisWeek}</p>
                </div>
              </div>
            </div>
            <div className="statRightUsers">
              <div className="statBody">
                <span className="subtitle">This Month</span>
                <p className="statValue">{users.thisMonth}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Transactions Card */}
      <article className="card activityCard">
        <div className="cardContent">
          <h2 className="earnings">Transaction History</h2>
          <div className="transactionList">
            {transactions.map((txn, index) => (
              <div className="transactionItem" key={index}>
                <img src={calculator} alt={txn.name} className="transactionImage" />
                <div className="transactionDetails">
                  <span className="transactionName">{txn.name}</span>
                  <span className="transactionDate">{txn.date}</span>
                </div>
                <p className="transactionPrice">₱{txn.price}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Recent Activity Card */}
      <article className="card activityCard">
        <div className="cardContent">
          <h2 className="earnings">Recent Activity</h2>
          <div className="activityList">
            {recentActivity.map((recentActivity, index) => (
              <div className="activityItem" key={index}>
                <img
                  src={require(`../Assets/${recentActivity.profileImage}`)}
                  alt={recentActivity.renterName}
                  className="activityProfileImage"
                />
                <div className="activityDetails">
                  <p className="activityMessage">
                    <strong>{recentActivity.renterName}</strong> posted a new item: <em>{recentActivity.itemTitle}</em>
                  </p>
                  <div className="activityMeta">
                    <span className="activityDate">{recentActivity.datePosted}</span>
                    <Link to={`rental-post${recentActivity.id}`} className="seeMoreLink">
                      See more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdminPage;
