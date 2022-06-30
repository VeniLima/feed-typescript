import styles from "../styles/Avatar.module.css";

interface avatarProps {
  src: string;
  hasBorder: boolean;
}

export function Avatar(props: avatarProps) {
  return (
    <img
      className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
