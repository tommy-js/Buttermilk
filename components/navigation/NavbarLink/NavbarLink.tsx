import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  link: string;
}

export const NavbarLink: React.FC<Props> = (props) => {
  return (
    <Link href={props.link}>
      <a className={styles.navbar_link}>{props.text}</a>
    </Link>
  );
};
