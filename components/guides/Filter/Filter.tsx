import React from "react";

interface Props {
  modSelected: (obj: any) => void;
  query: (input: string) => void;
}

export const Filter: React.FC<Props> = (props) => {
  return (
    <div>
      <p>Filter</p>
    </div>
  );
};
