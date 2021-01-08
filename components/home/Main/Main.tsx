import React, { useState } from "react";
import { Filter } from "../Filter/Filter";
import { Feed } from "../Feed/Feed";
import styles from "./styles.module.scss";

export const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [selected, setSelected] = useState({ stars: false, recent: true });

  function modSelected(obj: any) {
    setSelected(obj);
    setSearching(false);
  }

  function query(input: string) {
    setSearchQuery(input);
    setSearching(true);
  }

  return (
    <div className={styles.main}>
      <Filter modSelected={modSelected} query={query} />
      <Feed
        selected={selected}
        searchQuery={searchQuery}
        searching={searching}
        modSearching={() => setSearching(false)}
      />
    </div>
  );
};
