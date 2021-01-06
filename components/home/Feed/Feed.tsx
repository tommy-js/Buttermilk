import React from "react";
import { FeedItem } from "../feed_item/FeedItem/FeedItem";
import styles from "./styles.module.scss";
const testimg = require("../../../public/test_img.jpg");

export const Feed: React.FC = () => {
  const test = [
    {
      id: 0,
      title: "Test 1",
      subtitle: "subtitle 1",
      timestamp: 1609972233,
      imgUrl: testimg,
      stars: 0,
    },
    {
      id: 1,
      title: "Test 2",
      subtitle: "subtitle 2",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 2,
      title: "Test 3",
      subtitle: "subtitle 3",
      timestamp: 1609972341,
      imgUrl: testimg,
      stars: 8,
    },
    {
      id: 3,
      title: "Test 4",
      subtitle: "subtitle 4",
      timestamp: 1609972346,
      imgUrl: testimg,
      stars: 8,
    },
    {
      id: 4,
      title: "Test 5",
      subtitle: "subtitle 5",
      timestamp: 1609972352,
      imgUrl: testimg,
      stars: 2,
    },
    {
      id: 5,
      title: "Test 6",
      subtitle: "subtitle 6",
      timestamp: 1609972012,
      imgUrl: testimg,
      stars: 64,
    },
    {
      id: 6,
      title: "Test 7",
      subtitle: "subtitle 7",
      timestamp: 1609972365,
      imgUrl: testimg,
      stars: 822,
    },
    {
      id: 7,
      title: "Test 8",
      subtitle: "subtitle 8",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 8,
      title: "Test 9",
      subtitle: "subtitle 9",
      timestamp: 1609972384,
      imgUrl: testimg,
      stars: 7,
    },
  ];

  return (
    <div className={styles.feed}>
      {test.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          subtitle={el.subtitle}
          timestamp={el.timestamp}
          imgUrl={el.imgUrl}
          stars={el.stars}
        />
      ))}
    </div>
  );
};
