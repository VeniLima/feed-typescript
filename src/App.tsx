import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
