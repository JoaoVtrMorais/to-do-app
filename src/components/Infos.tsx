import { TaskType } from "./AddNewTask";
import { Info } from "./Info";

import styles from "./Infos.module.css";

interface InfosProps {
    data: TaskType[];
}

export function Infos({ data }: InfosProps) {
    return(
        <div className={styles.container}>
            <Info counter={data.length.toString()} />
            <Info counter="0" done/>
        </div>
    )
}