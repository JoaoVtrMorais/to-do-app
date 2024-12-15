import { AddNewTask } from './components/AddNewTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <main className={styles.content}>

        <AddNewTask />

      </main>
    </div>
  )
}

export default App