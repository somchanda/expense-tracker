import React from 'react';
import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddNewTransaction from './components/AddNewTransaction';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddNewTransaction />
      </div>
    </>
  );
}

export default App;
