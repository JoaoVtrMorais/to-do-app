import { Trash } from '@phosphor-icons/react';

import styles from "./Task.module.css";

interface TaskProps {
  text: string;
}

export function Task({ text }: TaskProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <p>{text}</p>

      <Trash size={22} className={styles.trash} />
        
    </div>
  );
}
