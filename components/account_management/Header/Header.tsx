import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Link href="/stories">
        <a className={styles.text}>Buttermilk</a>
      </Link>
    </div>
  );
};
