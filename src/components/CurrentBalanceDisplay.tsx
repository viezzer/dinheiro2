// import React from 'react';
// import styles from './CurrentBalanceDisplay.module.css';

interface CurrentBalanceDisplayProps {
  balance: string;
}

const CurrentBalanceDisplay = ({ balance }: CurrentBalanceDisplayProps) => {
  return (
    <div className="mb-5">
      <h2 className="font-bold text-2xl">SALDO ATUAL</h2>
      <h1 className="font-semibold text-4xl">R$ {balance}</h1>
    </div>
  );
};

export default CurrentBalanceDisplay;
