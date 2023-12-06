import './App.css'
//components
import CurrentBalanceDisplay from './components/CurrentBalanceDisplay'
import IncomeAndExpenseDisplay from './components/IncomeAndExpenseDisplay'
import NewTransactionButton from './components/NewTransactionButton'
import TransactionsList from './components/TransactionsList'
import DateFilter from './components/DateFilter'

//state imports
import {useState, useEffect} from 'react'

//date imports
import 'dayjs/locale/pt-br';  // Importe a configuração regional para português brasileiro
import dayjs from 'dayjs';
dayjs.locale('pt-br');  // Configure a configuração regional
import { format, parse, subWeeks, subMonths , isAfter} from 'date-fns';


interface Transaction {
  id: string;
  category: string;
  title: string;
  amount: string;
  date: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [balance, setBalance] = useState("3452.00")
  const [income, setIncome] = useState("345.00")
  const [expense, setExpense] = useState("546.54")
  const [filter, setFilter] = useState('week'); // 'all' | 'week' | 'month' | 'custom'
  

  useEffect(() => {
    // Fetch transactions when the component mounts
    fetchTransactions();
  }, [filter]);

  useEffect(() => {
    updateBalanceValue();
  }, [transactions]);

  const applyFilter = (allTransactions: Transaction[]) => {
    
    switch (filter) {
      case 'week':
        // Obtém a data da última semana
        const lastWeek = subWeeks(new Date(), 1);
        return allTransactions.filter((transaction) => {
          try {
            const formattedTransactionDate = format(parse(transaction.date, 'yyyy-MM-dd', new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
            const isAfterLastWeek = isAfter(parse(formattedTransactionDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()), lastWeek);
            if (isAfterLastWeek) {
              return transaction
            } 
          } catch (error) {
            console.error('Error formatting date:', error);
          }
        });
      case 'month':
        const lastMonth = subMonths(new Date(), 1);
        return allTransactions.filter((transaction) => {
          try {
            const formattedTransactionDate = format(parse(transaction.date, 'yyyy-MM-dd', new Date()), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
            const isAfterLastMonth = isAfter(parse(formattedTransactionDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", new Date()), lastMonth);
            if (isAfterLastMonth) {
              return transaction
            } 
          } catch (error) {
            console.error('Error formatting date:', error);
          }
          
        });
        break;
        return allTransactions;
    }
  };

  function fetchTransactions() {
      // Get transactions from local storage or initialize an empty array
      const storedTransactions: Transaction[] = JSON.parse(localStorage.getItem('transactions') || '[]');
      const filteredTransactions = applyFilter(storedTransactions)
      // Reverse the array for presentation
      if(filteredTransactions) {
        setTransactions(filteredTransactions);
      } else {
        setTransactions(storedTransactions);
      }
  }

  function updateBalanceValue() {
    const transactionsAmounts = transactions.map(function(transaction) {
        return parseFloat(transaction.amount)
    })

    const total = transactionsAmounts  
        .reduce(function(accumulator, transaction){
            return accumulator + transaction
        }, 0)  
        .toFixed(2)

    const income = transactionsAmounts
        .filter(function(value) {
            return value > 0
        })
        .reduce(function(accumulator, value) {
            return accumulator + value
        }, 0)
        .toFixed(2)

    const expense = Math.abs(transactionsAmounts
        .filter(function(value){
            return value < 0 
        })
        .reduce(function(accumulator, value){
            return accumulator + value
        }, 0))
        .toFixed(2)

      setBalance(total)
      setIncome(income)
      setExpense(expense)
  };

  function handleDeleteTransaction(ID:string, title:string) {
    const shouldDelete = window.confirm(`Tem certeza de que deseja excluir "${title}"`);
    if(shouldDelete){
        const storedTransactionsJSON: string | null= localStorage.getItem('transactions');
        const storedTransactions: Transaction[] = storedTransactionsJSON 
          ? JSON.parse(storedTransactionsJSON)
          : [] 
        const storedTransactionsWithoutDeletedOne = storedTransactions.filter(function(transaction){
            if(transaction.id!==ID) {
                return transaction;
            }
            return false
        })
        // Save the updated transactions array back to local storage
        localStorage.setItem('transactions', JSON.stringify(storedTransactionsWithoutDeletedOne));
        setTransactions(storedTransactionsWithoutDeletedOne)
        
    }
}




  return (
    <div className="app w-full md:w-9/12 lg:w-8/12 xl:w-7/12 flex flex-col items-center mx-auto">
      <CurrentBalanceDisplay balance={balance}/>
      <IncomeAndExpenseDisplay income={income} expense={expense}/>
      <div className='flex justify-evenly w-screen'>
        <NewTransactionButton reloadFatherCallback={fetchTransactions}/>
        <DateFilter filter={filter} setFilter={setFilter}/>
      </div>
        <TransactionsList transactions={transactions} handleDelete={handleDeleteTransaction} />
    </div>
  )
}

export default App
