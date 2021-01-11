import React from "react";
import { Search } from "../filter_items/Search/Search";
import { SearchListItems } from "../filter_items/SearchListItems/SearchListItems";
import styles from "./styles.module.scss";

interface Props {
  modSelected: (obj: any) => void;
  query: (input: string) => void;
}

export const Filter: React.FC<Props> = (props) => {
  return (
    <div className={styles.filter}>
      <Search query={props.query} />
      <SearchListItems modSelected={props.modSelected} />
    </div>
  );
};
