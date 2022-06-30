import { PencilLine } from "phosphor-react";
import styles from "../styles/Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/venilima.png" />
        <strong>Vinicius Lima</strong>
        <span>Web Developer</span>
      </div>
      <footer className={styles.footer}>
        <a href="#">
          <PencilLine className={styles.icon} size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
