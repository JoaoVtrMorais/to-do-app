// import { AddNewTask } from './components/AddNewTask';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Infos } from './components/Infos';

function App() {
  return (
    <div>
      <Header />

      <main className={styles.content}>

        {/* <AddNewTask /> */}

        <Infos />
        

      </main>
    </div>
  )
}

export default App