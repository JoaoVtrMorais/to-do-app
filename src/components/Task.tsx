import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

interface TaskProps {
  id: number;
  content: string;
  checked: boolean;
  onToggleChecked: () => void;
  onDeleteTask: (taskToDelete: number) => void;
}

export function Task({
  id,
  content,
  checked,
  onToggleChecked,
  onDeleteTask,
}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.container}>
      <input type="checkbox" checked={checked} onChange={onToggleChecked} />
      <p
        className={
          checked
            ? `${styles.content} ${styles.content_checked}`
            : styles.content
        }
      >
        {content}
      </p>

      <button onClick={handleDeleteTask}>
        <Trash size={22} className={styles.trash} />
      </button>
    </div>
  );
}
