import React from "react";
import { TextBlock } from "../TextBlock/TextBlock";
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
        <TextBlock text={el.text} id={el.id} key={el.id} />
      ))}
    </div>
  );
};
