// import styles from './IncomeAndExpenseDisplay.module.css'

interface IncomeAndExpenseDisplayProps {
    expense: string;
    income:string;
}

function IncomeAndExpenseDisplay({expense, income}: IncomeAndExpenseDisplayProps) {
    return(
        <div className="bg-card text-black flex flex-col sm:flex-row justify-evenly items-center rounded-lg py-2 px-4 w-3/4 sm:w-2/3">
            <div className="w-1/2 border-b border-1 border-black sm:border-r sm:border-b-0">
                <p className="font-bold text-xl">RECEITAS</p>
                <p className="font-bold text-income text-md">R$ {income}</p>
            </div>
            <div className="w-1/2">
                <p className="font-bold text-xl">DESPESAS</p>
                <p className="font-bold text-expense text-md">R$ {expense}</p>
            </div>
        </div>
    )
}

export default IncomeAndExpenseDisplay