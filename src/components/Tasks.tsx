import { TaskType } from "./AddNewTask";
import { EmptyTasks } from "./EmptyTasks";
import { Infos } from "./Infos";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  data: TaskType[];
}

export function Tasks({ data }: TasksProps) {

  const hasData = data.length > 0;

  return (
    <main className={styles.content}>
      <Infos data={data} />

      {
        hasData ? (
          <ul>
            {data.map((task) => (
              <Task key={task.id} text={task.content} />
            ))}
          </ul>
        ) : (
          <EmptyTasks />
        )
      }
      
    </main>
  );
}
