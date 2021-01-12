import React from "react";
import { Comment } from "../Comment/Comment";
import styles from "./styles.module.scss";

type Comment = {
  username: string;
  userId: string;
  text: string;
  stars: number;
  commentId: string;
  timestamp: number;
};

interface Props {
  comments: Comment[];
}

export const CommentSection: React.FC<Props> = (props) => {
  return (
    <div className={styles.comment_section}>
      {props.comments.map((el: any) => (
        <Comment
          username={el.username}
          userId={el.userId}
          timestamp={el.timestamp}
          stars={el.stars}
          commentId={el.commentId}
          text={el.text}
          key={el.commentId}
        />
      ))}
    </div>
  );
};
