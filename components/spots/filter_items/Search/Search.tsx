import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  query: (input: string) => void;
}

export const Search: React.FC<Props> = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <span>Search</span>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Location, grade, name, etc."
      />
      <button onClick={() => props.query(input)}>Go</button>
    </div>
  );
};
