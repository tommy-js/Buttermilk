import React from "react";

interface Props {
  imgUrl: string;
}

export const Image: React.FC<Props> = (props) => {
  return (
    <div>
      <img src={props.imgUrl} />
    </div>
  );
};
