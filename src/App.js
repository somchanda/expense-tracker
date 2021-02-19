import React from 'react';
import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/Transactions';
import AddNewTransaction from './components/AddNewTransaction';
import {GloabalProvider} from './context/GlobalState';

function App() {
  return (
    <GloabalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddNewTransaction />
      </div>
    </GloabalProvider>
  );
}

export default App;
