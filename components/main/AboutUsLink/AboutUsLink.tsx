import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const AboutUsLink: React.FC = () => {
  return (
    <div className={styles.about_us_link}>
      <Link href="/about">
        <a className={styles.link}>About Us</a>
      </Link>
    </div>
  );
};
