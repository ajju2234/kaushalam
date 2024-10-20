import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // Simulating API call with dummy data
    const dummyData = [
      { id: 1, name: 'Bitcoin', price: 50000, change: 2.5 },
      { id: 2, name: 'Ethereum', price: 3000, change: -1.2 },
      { id: 3, name: 'Cardano', price: 2, change: 5.7 },
    ];
    setCryptoData(dummyData);
  }, []);

  return (
    <div className="dashboard">
      <h2>Cryptocurrency Prices</h2>
      <div className="crypto-list">
        {cryptoData.map((crypto) => (
          <div key={crypto.id} className="crypto-item">
            <h3>{crypto.name}</h3>
            <p>Price: ${crypto.price.toFixed(2)}</p>
            <p className={crypto.change >= 0 ? 'positive' : 'negative'}>
              Change: {crypto.change}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;