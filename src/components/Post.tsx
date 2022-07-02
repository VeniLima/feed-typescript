import styles from "../styles/Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

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
  const [comments, setComments] = useState<string[]>(["Post bacana ein"]);

  const [newCommentText, setNewCommentText] = useState<string>("");

  function handleCreateNewComment() {
    event?.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event?.target.value);
  }

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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="commentContent"
          value={newCommentText}
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} />;
        })}
      </div>
    </article>
  );
}
