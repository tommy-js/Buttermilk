import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const GoButton: React.FC = () => {
  return (
    <div className={styles.go_button}>
      <Link href="/home">
        <a className={styles.go}>Go!</a>
      </Link>
    </div>
  );
};
