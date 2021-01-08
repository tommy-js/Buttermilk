import React, { useState } from "react";
import { Filter } from "../Filter/Filter";
import { Feed } from "../Feed/Feed";
import styles from "./styles.module.scss";

export const Main: React.FC = () => {
  const [selected, setSelected] = useState({ stars: false, recent: true });

  function modSelected(obj: any) {
    setSelected(obj);
  }

  return (
    <div className={styles.main}>
      <Filter modSelected={modSelected} />
      <Feed selected={selected} />
    </div>
  );
};
