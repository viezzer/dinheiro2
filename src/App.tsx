// import { useState } from 'react'
import './App.css'
import CurrentBalanceDisplay from './components/CurrentBalanceDisplay'
import IncomeAndExpenseDisplay from './components/IncomeAndExpenseDisplay'
import NewTransactionButton from './components/NewTransactionButton'

import {useState, useEffect} from 'react'


interface Transaction {
  id: string;
  category: string;
  title: string;
  amount: number;
  date: Date;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [balance, setBalance] = useState("3452.00")
  const [income, setIncome] = useState("345.00")
  const [expense, setExpense] = useState("546.54")

  useEffect(() => {
    // Fetch transactions when the component mounts
    fetchTransactions();
  }, []);

  function fetchTransactions() {
      // Get transactions from local storage or initialize an empty array
      const storedTransactions: Transaction[] = JSON.parse(localStorage.getItem('transactions') || '[]');
  
      // Reverse the array for presentation
      setTransactions(storedTransactions.reverse());
  }

  return (
    <div className="app w-full md:w-9/12 lg:w-8/12 xl:w-7/12 flex flex-col items-center mx-auto">
      <CurrentBalanceDisplay balance={balance}/>
      <IncomeAndExpenseDisplay income={income} expense={expense}/>
      <div className="mt-5 h-10 flex items-center justify-center w-full">
        <NewTransactionButton reloadFatherCallback={fetchTransactions}/>
      </div>
    </div>
  )
}

export default App
