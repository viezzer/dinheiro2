import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionForm from './NewTransactionForm';
import { FaCirclePlus } from "react-icons/fa6";
import styles from './NewTransactionButton.module.css'

interface NewTransactionButtonProps {
    reloadFatherCallback: () => void;
}

function NewTransactionButton({reloadFatherCallback}: NewTransactionButtonProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger className={styles.newTransactionButton}>
                <FaCirclePlus/>
                <p className='ml-2'>Transação</p>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay}/>
                <Dialog.Content className={styles.dialog}>
                    <NewTransactionForm reloadTransactionsFromChildreen={reloadFatherCallback}/>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default NewTransactionButton;