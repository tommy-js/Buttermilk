import React from "react";
import styles from "./styles.module.scss";

export const Search: React.FC = () => {
  return (
    <div>
      <span>Search</span>
      <input type="text" placeholder="search" />
    </div>
  );
};
