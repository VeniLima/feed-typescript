import "./styles/global.css";
import styles from "./styles/App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      name: "Jane Doe",
      role: "Developer",
      avatarUrl: "http://github.com/maykbrito.png",
    },
    publishedAt: new Date("2022-07-01 :00:00"),
    content: [
      {
        type: "paragraph",
        content:
          "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      id: 2,
      name: "Vinicius Lima",
      role: "Developer",
      avatarUrl: "http://github.com/venilima.png",
    },
    publishedAt: new Date("2022-06-25 20:00:00"),
    content: [
      {
        type: "paragraph",
        content:
          "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.",
      },
      {
        type: "paragraph",
        content:
          "É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
