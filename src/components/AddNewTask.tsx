import { PlusCircle } from "@phosphor-icons/react";

import styles from "./AddNewTask.module.css";
import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";

export interface TaskType {
  id: number;
  checked: boolean;
  content: string;
}

interface AddNewTaskProps {
  onNewTaskAdded: (dataCollected: TaskType[]) => void;
}

export function AddNewTask({ onNewTaskAdded }: AddNewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório.");
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const id = tasks.length + 1;
    const newData: TaskType = {
      id,
      checked: false,
      content: newTaskText,
    };
    setTasks([...tasks, newData]);
    setNewTaskText("");
  }

  useEffect(() => {
    if (tasks.length > 0) {
      onNewTaskAdded(tasks);
    }
  }, [tasks, onNewTaskAdded]);

  const isNewTaskEmpty = newTaskText.length == 0;

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        name="task"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar
        <PlusCircle size={22} color="#F2F2F2" />
      </button>
    </form>
  );
}
