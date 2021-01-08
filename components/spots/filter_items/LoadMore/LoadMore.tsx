import React from "react";

interface Props {
  loadMore: () => void;
}

export const LoadMore: React.FC<Props> = (props) => {
  return <button onClick={() => props.loadMore()}>Load More</button>;
};
