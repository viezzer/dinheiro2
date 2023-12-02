import { Dispatch, SetStateAction } from 'react';
import * as Switch from '@radix-ui/react-switch';
import styles from './SwitchDemo.module.css'

interface SwitchDemoProps {
    isIncome: boolean;
    setIsIncome: Dispatch<SetStateAction<boolean>>;
    setTitlePlaceholder: Dispatch<SetStateAction<string>>;
}

function SwitchDemo({setTitlePlaceholder, isIncome, setIsIncome}: SwitchDemoProps) {

    function handleSwitch() {
        if(isIncome){
            //muda para despesa
            setIsIncome(false)
            setTitlePlaceholder('Almoço, Mercado, etc...')
        } else {
            //muda para receita
            setIsIncome(true)
            setTitlePlaceholder('Salário, Serviço Prestado, etc...')
        }
    }

    return (
        <div className='flex justify-center'>
            <p className={styles.incomeText}>Receita</p>
            <Switch.Root className={styles.SwitchRoot} id="isIncome" onClick={handleSwitch}>
                <Switch.Thumb className={styles.SwitchThumb} />
            </Switch.Root>
            <p className={styles.expenseText}>Despesa</p>
        </div>
    ) 
}

export default SwitchDemo;