import * as Dialog from '@radix-ui/react-dialog';
import NewTransactionForm from './NewTransactionForm';
import { FaCirclePlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
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
                    <div className='flex justify-between items-center'>
                        <Dialog.Title className=' text-2xl font-bold'>Nova Transação</Dialog.Title>
                            <Dialog.Close asChild>
                                <IoClose size={26}/>
                            </Dialog.Close>
                    </div>
                    <NewTransactionForm reloadTransactionsFromChildreen={reloadFatherCallback}/>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default NewTransactionButton;