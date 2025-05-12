import React, { useState, useEffect } from 'react';
import './EarningsSection.css';
import { CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const EarningsSection = () => {
  const location = useLocation();

  const [earningsData, setEarningsData] = useState({
    totalEarnings: 4500,
    transactions: [
      { id: 1, date: '2025-04-01', amount: 1000 },
      { id: 2, date: '2025-04-05', amount: 1500 },
      { id: 3, date: '2025-04-12', amount: 2000 },
    ]
  });

  const activeTab = (() => {
    switch (location.pathname) {
      case '/profile': return 'post';
      case '/earnings': return 'earnings';
      default: return '';
    }
  })();

  useEffect(() => {
    const storedEarnings = localStorage.getItem('earningsData');
    if (storedEarnings) setEarningsData(JSON.parse(storedEarnings));
  }, []);

  return (
    <main className="earnings">
      <section className="earningsSection">
        <div className="earningsHeader">
          <h2 className="sectionTitle">Earnings Overview</h2>
          <div className="totalEarnings">
            <h3 className="earningsAmount">₱{earningsData.totalEarnings.toLocaleString()}</h3>
          </div>
        </div>

        <div className="transactionHistory">
          <h3 className="sectionTitle">Transaction History</h3>
          <ul className="transactionList">
            {earningsData.transactions.map(transaction => (
              <li key={transaction.id} className="transactionItem">
                <div className="transactionDate">
                  <CalendarIcon className="calendarIcon" />
                  <p>{transaction.date}</p>
                </div>
                <div className="transactionAmount">
                  <p>₱{transaction.amount.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default EarningsSection;
