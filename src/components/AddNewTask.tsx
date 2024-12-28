import { PlusCircle } from '@phosphor-icons/react';

import styles from './AddNewTask.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';

interface AddNewTaskProps {
    onNewTaskAdded: (dataCollected: string[]) => void;
}

export function AddNewTask({ onNewTaskAdded }: AddNewTaskProps) {
    
    const [newTaskText, setNewTaskText] = useState('')

    const [tasks, setTasks] = useState<string[]>([])

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }
    
    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
    }
    
    useEffect(() => {
        if (tasks.length > 0) {
            onNewTaskAdded(tasks);
        }
    }, [tasks, onNewTaskAdded]);

    const isNewTaskEmpty = newTaskText.length == 0;

    return (
        <form onSubmit={handleCreateNewTask} className={styles.container}>
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