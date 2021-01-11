import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  path: string;
  text: string;
}

export const MenuRoute: React.FC<Props> = (props) => {
  return (
    <Link href={props.path}>
      <a className={styles.menu_route}>{props.text}</a>
    </Link>
  );
};
