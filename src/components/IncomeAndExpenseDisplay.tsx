// import styles from './IncomeAndExpenseDisplay.module.css'

interface IncomeAndExpenseDisplayProps {
    expense: string;
    income:string;
}

function IncomeAndExpenseDisplay({expense, income}: IncomeAndExpenseDisplayProps) {
    return(
        <div className="bg-card text-black flex rounded-lg py-2 w-full">
            <div className="border-r-2 border-black px-4">
                <p className="font-bold">RECEITAS</p>
                <p className="font-bold text-income">R$ {income}</p>
            </div>
            <div className="px-4">
                <p className="font-bold">DESPESAS</p>
                <p className="font-bold text-expense">R$ {expense}</p>
            </div>
        </div>
    )
}

export default IncomeAndExpenseDisplay