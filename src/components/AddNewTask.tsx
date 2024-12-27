import { PlusCircle } from '@phosphor-icons/react';

import styles from './AddNewTask.module.css';


export function AddNewTask() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar
                <PlusCircle size={22} color='#F2F2F2'/>
            </button>
        </div>
    )
}