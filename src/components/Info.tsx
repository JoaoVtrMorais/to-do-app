import styles from './Info.module.css';

interface InfoProps {
    done?: boolean
    counter: string
}

export function Info({ done = false, counter }: InfoProps) {

    return (
        <div className={styles.container}>

            <p className={ done ? styles.done : styles.created}>
                { done ? "Concluídas" : "Tarefas criadas"}
            </p>

            <div className={styles.counter}>
                <p>
                    {counter}
                </p>
            </div>

        </div>
    )
}