import { EmptyTasks } from "./EmptyTasks";
import { Infos } from "./Infos";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  data: string[];
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
              <Task key={task} text={task} />
            ))}
          </ul>
        ) : (
          <EmptyTasks />
        )
      }
      
    </main>
  );
}
