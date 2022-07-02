import styles from "../styles/Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };

  publishedAt: Date;
  content: { type: string; content: string }[];
}
[];

export function Post(props: PostProps) {
  const publishedAtFormattedTitle = format(
    props.publishedAt,
    "d' de 'LLLL' as ' H'h:'m'm'",
    {
      locale: ptBR,
    }
  );

  const publishedAtRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          className={styles.time}
          title={publishedAtFormattedTitle}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedAtRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
