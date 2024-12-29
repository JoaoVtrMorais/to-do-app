import { TaskType } from "./AddNewTask";
import { EmptyTasks } from "./EmptyTasks";
import { Infos } from "./Infos";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

interface TasksProps {
  data: TaskType[];
  toggleTaskChecked: (id: number) => void;
  onDeleteTask: (taskToDelete: number) => void;
}

export function Tasks({ data, toggleTaskChecked, onDeleteTask }: TasksProps) {

  const hasData = data.length > 0;

  return (
    <main className={styles.content}>
      <Infos data={data} />

      {
        hasData ? (
          <ul>
            {data.map((task) => (
              <Task 
                key={task.id}
                id={task.id} 
                content={task.content}
                checked={task.checked}
                onToggleChecked={() => toggleTaskChecked(task.id)}
                onDeleteTask={onDeleteTask} 
              />
            ))}
          </ul>
        ) : (
          <EmptyTasks />
        )
      }
      
    </main>
  );
}
