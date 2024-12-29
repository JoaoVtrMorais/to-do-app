import { AddNewTask, TaskType } from "./components/AddNewTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState<TaskType[]>([]);

  function collectData(newTask: TaskType) {
    setData((prevData) => [...prevData, newTask]);
  }

  function toggleTaskChecked(id: number) {
    const updatedTasks = data.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setData(updatedTasks);
  }

  function deleteTask(taskToDelete: number) {
    const tasksWithoutDeletedOne = data.filter((task) => {
      return task.id != taskToDelete;
    });

    setData(tasksWithoutDeletedOne);
  }

  return (
    <div className={styles.content}>
      <Header />

      <AddNewTask onNewTaskAdded={collectData} />

      <Tasks
        data={data}
        toggleTaskChecked={toggleTaskChecked}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
