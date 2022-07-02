import styles from "../styles/Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder: boolean;
}

export function Avatar(props: AvatarProps) {
  return (
    <img
      className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
    />
  );
}
