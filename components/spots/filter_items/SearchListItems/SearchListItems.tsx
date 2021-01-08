import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Props {
  modSelected: (obj: any) => void;
}

export const SearchListItems: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState({ stars: false, recent: true });

  useEffect(() => {
    props.modSelected(selected);
  }, [selected]);

  return (
    <div className={styles.search_list_items}>
      <div className={styles.container}>
        <label>Stars</label>
        <input
          type="checkbox"
          checked={selected.stars}
          onChange={() =>
            setSelected({ stars: !selected.stars, recent: false })
          }
        />
      </div>
      <div className={styles.container}>
        <label>Most Recent</label>
        <input
          type="checkbox"
          checked={selected.recent}
          onChange={() =>
            setSelected({ stars: false, recent: !selected.recent })
          }
        />
      </div>
    </div>
  );
};
