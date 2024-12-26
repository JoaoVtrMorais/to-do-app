// import { AddNewTask } from './components/AddNewTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Infos } from './components/Infos';
import { EmptyTasks } from './components/EmptyTasks';

function App() {
  return (
    <div>
      <Header />

      <main className={styles.content}>

        {/* <AddNewTask /> */}

        <Infos />
        
        <EmptyTasks />
        

      </main>
    </div>
  )
}

export default App