import * as Dialog from '@radix-ui/react-dialog';
import styles from './TransactionsList.module.css';
import { IoClose } from "react-icons/io5";

interface Transaction {
    id:string;
    category:string;
    title:string;
    amount:string;
    date:string;
}

interface TransactionsListProps {
    transactions: Transaction[]
    handleDelete: (ID:string, title:string) => void;
}

function TransactionsList({transactions, handleDelete}: TransactionsListProps) {

    

    function formatAmount(transaction:Transaction) {
        const operator = parseFloat(transaction.amount) < 0 ? "-" : "+"
        const CSSclass = parseFloat(transaction.amount) < 0 ? styles.minus : styles.plus
        const amountWithoutOperator = Math.abs(parseFloat(transaction.amount)).toFixed(2)
    
        return <span className={CSSclass}>{operator} R$ {amountWithoutOperator}</span>
    };

    function formatDate(transaction: Transaction) {
        const [year,month,day] = transaction.date.split("-");
        const formatedDate = `${day}/${month}/${year}` 
        return <p className={styles.data}>{formatedDate}</p>
    }

    return (
        <div className={styles.container}>
            {transactions ? (transactions.map((transaction, index) => (
            <Dialog.Root >
                <Dialog.Trigger className='w-full flex items-center justify-center'>
                    <div className='w-full h-11 bg-card flex flex-row rounded-lg mb-2 justify-between sm:w-96 md:w-3/4' key={index}>
                        <div className={styles.titleDiv}>
                            <p className={styles.title}>{transaction.title}</p>
                        </div>
                        <div className={styles.dateAndAmountDiv}>
                            {formatDate(transaction)}
                            <p>
                                {formatAmount(transaction)}
                            </p>
                        </div>
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={styles.dialogOverlay}/>
                    <Dialog.Content className={styles.dialog}>
                        <div className='flex justify-end'>
                            <Dialog.Close asChild>
                                <IoClose size={26}/>
                            </Dialog.Close>
                        </div>
                        Teste
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
                ))) : (
                    <p>Você ainda não possui transações registradas. Registre uma clicando em "Nova Transação"!</p>
                )
            }
        </div>

    )
}

export default TransactionsList