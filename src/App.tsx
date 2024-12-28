import { AddNewTask } from './components/AddNewTask';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.content}>
      <Header />

      <AddNewTask />

      <Tasks />
    </div>
  )
}

export default App