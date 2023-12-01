// import React from 'react';
// import styles from './CurrentBalanceDisplay.module.css';

interface CurrentBalanceDisplayProps {
  balance: string;
}

const CurrentBalanceDisplay = ({ balance }: CurrentBalanceDisplayProps) => {
  return (
    <div className="">
      <h2 className="">SALDO ATUAL</h2>
      <h1 className="">R$ {balance}</h1>
    </div>
  );
};

export default CurrentBalanceDisplay;
