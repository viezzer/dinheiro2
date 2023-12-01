// import { useState } from 'react'
import './App.css'
import CurrentBalanceDisplay from './components/CurrentBalanceDisplay'
import IncomeAndExpenseDisplay from './components/IncomeAndExpenseDisplay'

function App() {

  return (
    <div className="app w-1/3 flex flex-col items-center m-auto">
      <CurrentBalanceDisplay balance="800"/>
      <IncomeAndExpenseDisplay income="300.00" expense="200.00"/>
    </div>
  )
}

export default App
