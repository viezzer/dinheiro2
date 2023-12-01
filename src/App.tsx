// import { useState } from 'react'
import './App.css'
import CurrentBalanceDisplay from './components/CurrentBalanceDisplay'
import IncomeAndExpenseDisplay from './components/IncomeAndExpenseDisplay'

function App() {

  return (
    <div className="app w-full md:w-9/12 lg:w-8/12 xl:w-7/12 flex flex-col items-center mx-auto">
      <CurrentBalanceDisplay balance="800"/>
      <IncomeAndExpenseDisplay income="300.00" expense="200.00"/>
    </div>
  )
}

export default App
