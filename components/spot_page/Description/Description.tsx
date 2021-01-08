import React from "react";

interface Props {
  description: string;
}

export const Description: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.description}</p>
    </div>
  );
};
