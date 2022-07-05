import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "../styles/Comment.module.css";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: Function;
}

export function Comment(props: CommentProps) {
  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleGiveLike() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="http://github.com/venilima.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius Lima</strong>
              <time
                className={styles.time}
                title="14 de Maio as 8 horas"
                dateTime="2022-05-14 08:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleGiveLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
