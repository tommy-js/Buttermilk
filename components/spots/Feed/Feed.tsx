import React from "react";
import { FeedItem } from "../feed_item/FeedItem/FeedItem";
import styles from "./styles.module.scss";
const test = require("../../../public/boulder1.jpg");

export const Feed: React.FC = () => {
  const test_list = [
    {
      id: 0,
      title: "test 1",
      subtitle: "test subtitle 1",
      imgUrl: test,
      stars: 0,
    },
    {
      id: 1,
      title: "test 2",
      subtitle: "test subtitle 2",
      imgUrl: test,
      stars: 2,
    },
    {
      id: 2,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test,
      stars: 19,
    },
    {
      id: 3,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test,
      stars: 24,
    },
    {
      id: 4,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test,
      stars: 11,
    },
    {
      id: 5,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test,
      stars: 1,
    },
    {
      id: 6,
      title: "test 5",
      subtitle: "test subtitle 5",
      imgUrl: test,
      stars: 49,
    },
    {
      id: 7,
      title: "test 6",
      subtitle: "test subtitle 6",
      imgUrl: test,
      stars: 39,
    },
    {
      id: 8,
      title: "test 7",
      subtitle: "test subtitle 7",
      imgUrl: test,
      stars: 22,
    },
    {
      id: 9,
      title: "test 8",
      subtitle: "test subtitle 8",
      imgUrl: test,
      stars: 0,
    },
  ];

  return (
    <div className={styles.feed}>
      {test_list.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          subtitle={el.subtitle}
          imgUrl={el.imgUrl}
          stars={el.stars}
          key={el.id}
        />
      ))}
    </div>
  );
};
