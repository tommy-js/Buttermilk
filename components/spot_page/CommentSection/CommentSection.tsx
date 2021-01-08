import React from "react";
import { Comment } from "../Comment/Comment";

type Comment = {
  username: string;
  userId: string;
  text: string;
  stars: number;
  commentId: string;
};

interface Props {
  comments: Comment[];
}

export const CommentSection: React.FC<Props> = (props) => {
  return (
    <div>
      {props.comments.map((el: any) => (
        <Comment text={el.text} key={el.commentId} />
      ))}
    </div>
  );
};
