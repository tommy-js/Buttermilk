import React from "react";
import { FeedItem } from "../feed_item/FeedItem/FeedItem";
import styles from "./styles.module.scss";
const test = require("../../../public/boulder1.jpg");
const test2 = require("../../../public/boulder2.jpg");
const test3 = require("../../../public/boulder3.jpg");
const test4 = require("../../../public/boulder4.jpg");
const test5 = require("../../../public/boulder5.jpg");

export const Feed: React.FC = () => {
  const test_list = [
    {
      id: 0,
      title: "test 1",
      subtitle: "test subtitle 1",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 1,
      title: "test 2",
      subtitle: "test subtitle 2",
      imgUrl: test4,
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
      imgUrl: test2,
      stars: 24,
    },
    {
      id: 4,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test4,
      stars: 11,
    },
    {
      id: 5,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test5,
      stars: 1,
    },
    {
      id: 6,
      title: "test 5",
      subtitle: "test subtitle 5",
      imgUrl: test3,
      stars: 49,
    },
    {
      id: 7,
      title: "test 6",
      subtitle: "test subtitle 6",
      imgUrl: test2,
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
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 10,
      title: "test 1",
      subtitle: "test subtitle 1",
      imgUrl: test3,
      stars: 0,
    },
    {
      id: 11,
      title: "test 2",
      subtitle: "test subtitle 2",
      imgUrl: test4,
      stars: 2,
    },
    {
      id: 12,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test5,
      stars: 19,
    },
    {
      id: 13,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test4,
      stars: 24,
    },
    {
      id: 14,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test2,
      stars: 11,
    },
    {
      id: 15,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test3,
      stars: 1,
    },
    {
      id: 16,
      title: "test 5",
      subtitle: "test subtitle 5",
      imgUrl: test,
      stars: 49,
    },
    {
      id: 17,
      title: "test 6",
      subtitle: "test subtitle 6",
      imgUrl: test5,
      stars: 39,
    },
    {
      id: 18,
      title: "test 7",
      subtitle: "test subtitle 7",
      imgUrl: test3,
      stars: 22,
    },
    {
      id: 19,
      title: "test 8",
      subtitle: "test subtitle 8",
      imgUrl: test4,
      stars: 0,
    },
    {
      id: 20,
      title: "test 1",
      subtitle: "test subtitle 1",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 21,
      title: "test 2",
      subtitle: "test subtitle 2",
      imgUrl: test5,
      stars: 2,
    },
    {
      id: 22,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test3,
      stars: 19,
    },
    {
      id: 23,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test2,
      stars: 24,
    },
    {
      id: 24,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test,
      stars: 11,
    },
    {
      id: 25,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test4,
      stars: 1,
    },
    {
      id: 26,
      title: "test 5",
      subtitle: "test subtitle 5",
      imgUrl: test3,
      stars: 49,
    },
    {
      id: 27,
      title: "test 6",
      subtitle: "test subtitle 6",
      imgUrl: test2,
      stars: 39,
    },
    {
      id: 28,
      title: "test 7",
      subtitle: "test subtitle 7",
      imgUrl: test,
      stars: 22,
    },
    {
      id: 29,
      title: "test 8",
      subtitle: "test subtitle 8",
      imgUrl: test5,
      stars: 0,
    },
    {
      id: 30,
      title: "test 1",
      subtitle: "test subtitle 1",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 31,
      title: "test 2",
      subtitle: "test subtitle 2",
      imgUrl: test3,
      stars: 2,
    },
    {
      id: 32,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test4,
      stars: 19,
    },
    {
      id: 33,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test,
      stars: 24,
    },
    {
      id: 34,
      title: "test 3",
      subtitle: "test subtitle 3",
      imgUrl: test5,
      stars: 11,
    },
    {
      id: 35,
      title: "test 4",
      subtitle: "test subtitle 4",
      imgUrl: test2,
      stars: 1,
    },
    {
      id: 36,
      title: "test 5",
      subtitle: "test subtitle 5",
      imgUrl: test3,
      stars: 49,
    },
    {
      id: 37,
      title: "test 6",
      subtitle: "test subtitle 6",
      imgUrl: test4,
      stars: 39,
    },
    {
      id: 38,
      title: "test 7",
      subtitle: "test subtitle 7",
      imgUrl: test2,
      stars: 22,
    },
    {
      id: 39,
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
