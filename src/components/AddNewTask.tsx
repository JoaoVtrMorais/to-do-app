import { PlusCircle } from '@phosphor-icons/react';

import styles from './AddNewTask.module.css';
import { ChangeEvent, InvalidEvent, useState } from 'react';


export function AddNewTask() {
    
    const [newTaskText, setNewTaskText] = useState('')

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    const isNewTaskEmpty = newTaskText.length == 0;


    return (
        <form className={styles.container}>
            <input 
                name='task'
                type="text" 
                placeholder='Adicione uma nova tarefa'
                value={newTaskText}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type='submit' disabled={isNewTaskEmpty}>
                Criar
                <PlusCircle size={22} color='#F2F2F2'/>
            </button>
        </form>
    )
}