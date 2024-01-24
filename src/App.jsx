import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';
import { SideBar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="content">
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Post />
      </main>
    </div>
  );
}

export default App;
