import React from "react";
import { Search } from "../filter_items/Search/Search";
import { SearchListItems } from "../filter_items/SearchListItems/SearchListItems";
import styles from "./styles.module.scss";

export const Filter: React.FC = () => {
  function modSelected() {}

  return (
    <div className={styles.filter}>
      <Search />
      <SearchListItems modSelected={modSelected} />
    </div>
  );
};
