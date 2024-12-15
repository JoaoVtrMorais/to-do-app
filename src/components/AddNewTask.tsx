import styles from './AddNewTask.module.css';
import PlusIcon from '../assets/Plus.svg'

export function AddNewTask() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>
                Criar
                <img src={PlusIcon} alt="" />
            </button>
        </div>
    )
}