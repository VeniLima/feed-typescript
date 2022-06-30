import styles from "../styles/Header.module.css";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <strong>Feed</strong>
    </header>
  );
}
