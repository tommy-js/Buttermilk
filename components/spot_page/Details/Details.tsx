import React from "react";

interface Props {
  title: string;
  username: string;
  stars: number;
}

export const Details: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.username}</p>
      <p>{props.stars}</p>
    </div>
  );
};
