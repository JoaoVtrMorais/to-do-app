
import { EmptyTasks } from "./EmptyTasks";
import { Infos } from "./Infos";
import { Task } from "./Task";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <main className={styles.content}>
      <Infos />

      <EmptyTasks />

      <Task text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
    </main>
  );
}
