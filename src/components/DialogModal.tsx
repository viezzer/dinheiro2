import * as Dialog from '@radix-ui/react-dialog';
import styles from './Dialog.module.css';
import { IoClose } from "react-icons/io5";
import {ReactNode} from 'react';

interface DialogModalProps {
    trigger:ReactNode;
    content:ReactNode;
    title:string;
}

function DialogModal ({trigger, content, title}: DialogModalProps){
    return (
        <Dialog.Root >
            <Dialog.Trigger className='w-full flex items-center justify-center'>
               {trigger}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.dialogOverlay}/>
                <Dialog.Content className={styles.dialog}>
                    <div className='flex justify-end'>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.Close asChild>
                            <IoClose size={26}/>
                        </Dialog.Close>
                    </div>
                    {content}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default DialogModal;