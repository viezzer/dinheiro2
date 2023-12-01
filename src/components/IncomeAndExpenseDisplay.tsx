// import styles from './IncomeAndExpenseDisplay.module.css'

interface IncomeAndExpenseDisplayProps {
    expense: string;
    income:string;
}

function IncomeAndExpenseDisplay({expense, income}: IncomeAndExpenseDisplayProps) {
    return(
        <div className="">
            <div className="">
                <p className="">RECEITAS</p>
                <p className="">R$ {income}</p>
            </div>
            <div className="">
                <p className="">DESPESAS</p>
                <p className="">R$ {expense}</p>
            </div>
        </div>
    )
}

export default IncomeAndExpenseDisplay