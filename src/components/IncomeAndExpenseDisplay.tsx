// import styles from './IncomeAndExpenseDisplay.module.css'

interface IncomeAndExpenseDisplayProps {
    expense: string;
    income:string;
}

function IncomeAndExpenseDisplay({expense, income}: IncomeAndExpenseDisplayProps) {
    return(
        <div className="bg-card text-black flex justify-evenly rounded-lg py-2 md:w-9/12 lg:w-8/12 xl:w-7/12 ">
            <div className="px-8">
                <p className="font-bold">RECEITAS</p>
                <p className="font-bold text-income">R$ {income}</p>
            </div>
            <div className="border-r-2 border-black "></div>
            <div className="px-8">
                <p className="font-bold">DESPESAS</p>
                <p className="font-bold text-expense">R$ {expense}</p>
            </div>
        </div>
    )
}

export default IncomeAndExpenseDisplay