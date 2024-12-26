import Clipboard from '../assets/Clipboard.svg';
import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
    return (
        <div className={styles.container}>

            <img src={Clipboard} />

            <div>
                <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>
    )
}