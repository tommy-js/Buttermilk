import React from "react";
import Link from "next/link";

interface Props {
  path: string;
  text: string;
}

export const MenuRoute: React.FC<Props> = (props) => {
  return (
    <Link href={props.path}>
      <a>{props.text}</a>
    </Link>
  );
};
