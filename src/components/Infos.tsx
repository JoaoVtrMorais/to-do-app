import { TaskType } from "./AddNewTask";
import { Info } from "./Info";

import styles from "./Infos.module.css";

interface InfosProps {
  data: TaskType[];
}

export function Infos({ data }: InfosProps) {
  const totalCheckedTasks = data.filter((task) => task.checked).length;

  return (
    <div className={styles.container}>
      <Info counter={data.length.toString()} />
      <Info
        counter={
          data.length === 0 ? "0" : `${totalCheckedTasks} de ${data.length}`
        }
        done
      />
    </div>
  );
}
