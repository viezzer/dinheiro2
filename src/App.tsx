// import { useState } from 'react'
import './App.css'
import CurrentBalanceDisplay from './components/CurrentBalanceDisplay'
import IncomeAndExpenseDisplay from './components/IncomeAndExpenseDisplay'

function App() {

  return (
    <>
      <CurrentBalanceDisplay balance="800"/>
      <IncomeAndExpenseDisplay income="300.00" expense="200"/>
    </>
  )
}

export default App
