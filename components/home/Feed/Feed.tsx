import React, { useState, useEffect } from "react";
import { FeedItem } from "../feed_item/FeedItem/FeedItem";
import styles from "./styles.module.scss";
const testimg = require("../../../public/test_img.jpg");
const testimg2 = require("../../../public/test_img_2.jpg");
const testimg3 = require("../../../public/test_img_3.jpg");
const testimg4 = require("../../../public/test_img_4.jpg");

interface Props {
  selected: any;
  searchQuery: string;
  searching: boolean;
}

export const Feed: React.FC<Props> = (props) => {
  const test = [
    {
      id: 0,
      title: "Bouldering in the snow",
      username: "James",
      timestamp: 1609972233,
      imgUrl: testimg4,
      stars: 0,
    },
    {
      id: 1,
      title: "Skiing for noobs",
      username: "J22A",
      timestamp: 1609972261,
      imgUrl: testimg,
      stars: 3,
    },
    {
      id: 2,
      title: "Caving at its best",
      username: "Tommy",
      timestamp: 1609972341,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 3,
      title: "Stepping into the unknown",
      username: "Mac",
      timestamp: 1609972346,
      imgUrl: testimg2,
      stars: 8,
    },
    {
      id: 4,
      title: "Bouldering in the Gunks",
      username: "Max",
      timestamp: 1609972352,
      imgUrl: testimg4,
      stars: 2,
    },
    {
      id: 5,
      title: "Hiking the Appalacian Trail",
      username: "Karen",
      timestamp: 1609972012,
      imgUrl: testimg2,
      stars: 64,
    },
    {
      id: 6,
      title: "Mountaineering",
      username: "Jord",
      timestamp: 1609972365,
      imgUrl: testimg3,
      stars: 822,
    },
    {
      id: 7,
      title: "Trees",
      username: "44ew",
      timestamp: 1609971245,
      imgUrl: testimg,
      stars: 83,
    },
    {
      id: 8,
      title: "Something else",
      username: "Tommy",
      timestamp: 1609972384,
      imgUrl: testimg4,
      stars: 7,
    },
  ];
  const [array, setArray] = useState(test);

  useEffect(() => {
    if (props.selected.recent === true) {
      let arr = [...test];
      arr.sort(function (a, b) {
        return a.timestamp - b.timestamp;
      });
      setArray(arr);
    } else if (props.selected.stars === true) {
      let arr = [...test];
      arr.sort(function (a, b) {
        return b.stars - a.stars;
      });
      setArray(arr);
    }
  }, [props.selected]);

  useEffect(() => {
    if (props.searching === true) {
      let original = [...test];
      let updated = [];
      let queryLowercased = props.searchQuery.toLowerCase();
      for (let i = 0; i < original.length; i++) {
        let lowerCasedTitle = original[i].title.toLowerCase();
        let lowerCasedUsername = original[i].username.toLowerCase();
        if (lowerCasedTitle.includes(queryLowercased)) {
          updated.push(original[i]);
        } else if (lowerCasedUsername.includes(queryLowercased)) {
          updated.push(original[i]);
        }
      }
      setArray(updated);
    }
  }, [props.searchQuery]);

  return (
    <div className={styles.feed}>
      {array.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          username={el.username}
          timestamp={el.timestamp}
          imgUrl={el.imgUrl}
          stars={el.stars}
          key={el.id}
        />
      ))}
    </div>
  );
};
