import { AddNewTask } from './components/AddNewTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Infos } from './components/Infos';
import { EmptyTasks } from './components/EmptyTasks';
import { Task } from './components/Task';

function App() {
  return (
    <div>
      <Header />

      <main className={styles.content}>

        <AddNewTask />

        <Infos />
        
        <EmptyTasks />
        
        <Task text='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' />
      </main>
    </div>
  )
}

export default App