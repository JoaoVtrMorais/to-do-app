import { AddNewTask } from './components/AddNewTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState<string[]>([])

  function collectData(dataCollected: string[]) {
    setData(dataCollected)
  }

  return (
    <div className={styles.content}>
      <Header />

      <AddNewTask onNewTaskAdded={collectData}/>

      <Tasks data={data}/>
    </div>
  )
}

export default App