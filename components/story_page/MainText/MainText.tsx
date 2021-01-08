import React from "react";
import styles from "./styles.module.scss";

interface Text {
  text: string;
  id: number;
}

interface Props {
  text: Text[];
}

export const MainText: React.FC<Props> = (props) => {
  return (
    <div>
      {props.text.map((el: any) => (
        <p>{el.text}</p>
      ))}
    </div>
  );
};
