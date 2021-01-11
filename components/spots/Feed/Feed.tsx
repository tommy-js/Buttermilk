import React, { useState, useEffect } from "react";
import { FeedItem } from "../feed_item/FeedItem/FeedItem";
import { LoadMore } from "../filter_items/LoadMore/LoadMore";
import { RefreshNotification } from "../RefreshNotification/RefreshNotification";
import {
  sortByRecent,
  sortByStars,
  updateSearchQuery,
  loadMoreSet,
} from "./index";
import styles from "./styles.module.scss";
const test1 = require("../../../public/boulder1.jpg");
const test2 = require("../../../public/boulder2.jpg");
const test3 = require("../../../public/boulder3.jpg");
const test4 = require("../../../public/boulder4.jpg");
const test5 = require("../../../public/boulder5.jpg");

interface Props {
  selected: any;
  searchQuery: string;
  searching: boolean;
  modSearching: () => void;
}

export const Feed: React.FC<Props> = (props) => {
  const test = [
    {
      id: 0,
      title: "test 1",
      username: "test username 1",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 1,
      title: "test 2",
      username: "test username 2",
      imgUrl: test4,
      stars: 2,
    },
    {
      id: 2,
      title: "test 3",
      username: "test username 3",
      imgUrl: test1,
      stars: 19,
    },
    {
      id: 3,
      title: "test 4",
      username: "test username 4",
      imgUrl: test2,
      stars: 24,
    },
    {
      id: 4,
      title: "test 3",
      username: "test username 3",
      imgUrl: test4,
      stars: 11,
    },
    {
      id: 5,
      title: "test 4",
      username: "test username 4",
      imgUrl: test5,
      stars: 1,
    },
    {
      id: 6,
      title: "test 5",
      username: "test username 5",
      imgUrl: test3,
      stars: 49,
    },
    {
      id: 7,
      title: "test 6",
      username: "test username 6",
      imgUrl: test2,
      stars: 39,
    },
    {
      id: 8,
      title: "test 7",
      username: "test username 7",
      imgUrl: test1,
      stars: 22,
    },
    {
      id: 9,
      title: "test 83",
      username: "test username 8",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 10,
      title: "test 51",
      username: "test username 1",
      imgUrl: test3,
      stars: 0,
    },
    {
      id: 11,
      title: "test 22",
      username: "test username 2",
      imgUrl: test4,
      stars: 2,
    },
    {
      id: 12,
      title: "test42 3",
      username: "test username 3",
      imgUrl: test5,
      stars: 19,
    },
    {
      id: 13,
      title: "test1 4",
      username: "test username 4",
      imgUrl: test4,
      stars: 24,
    },
    {
      id: 14,
      title: "te5st 3",
      username: "test username 3",
      imgUrl: test2,
      stars: 11,
    },
    {
      id: 15,
      title: "tes3t 4",
      username: "test username 4",
      imgUrl: test3,
      stars: 1,
    },
    {
      id: 16,
      title: "tes56t 5",
      username: "test username 5",
      imgUrl: test1,
      stars: 49,
    },
    {
      id: 17,
      title: "tes25t 6",
      username: "test username 6",
      imgUrl: test5,
      stars: 39,
    },
    {
      id: 18,
      title: "testew 7",
      username: "test username 7",
      imgUrl: test3,
      stars: 22,
    },
    {
      id: 19,
      title: "testf 8",
      username: "test username 8",
      imgUrl: test4,
      stars: 0,
    },
    {
      id: 20,
      title: "tesg32t 1",
      username: "test username 1",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 21,
      title: "testg23 2",
      username: "test username 2",
      imgUrl: test5,
      stars: 2,
    },
    {
      id: 22,
      title: "test 3",
      username: "test username 3",
      imgUrl: test3,
      stars: 19,
    },
    {
      id: 23,
      title: "test 4",
      username: "test username 4",
      imgUrl: test2,
      stars: 24,
    },
    {
      id: 24,
      title: "test 3",
      username: "test username 3",
      imgUrl: test1,
      stars: 11,
    },
    {
      id: 25,
      title: "test 4",
      username: "test username 4",
      imgUrl: test4,
      stars: 1,
    },
    {
      id: 26,
      title: "test 5",
      username: "test username 5",
      imgUrl: test3,
      stars: 49,
    },
    {
      id: 27,
      title: "test 6",
      username: "test username 6",
      imgUrl: test2,
      stars: 39,
    },
    {
      id: 28,
      title: "test 7",
      username: "test username 7",
      imgUrl: test1,
      stars: 22,
    },
    {
      id: 29,
      title: "test 8",
      username: "test username 8",
      imgUrl: test5,
      stars: 0,
    },
    {
      id: 30,
      title: "test 1",
      username: "test username 1",
      imgUrl: test2,
      stars: 0,
    },
    {
      id: 31,
      title: "test 2",
      username: "test username 2",
      imgUrl: test3,
      stars: 2,
    },
    {
      id: 32,
      title: "test 3",
      username: "test username 3",
      imgUrl: test4,
      stars: 19,
    },
    {
      id: 33,
      title: "test 4",
      username: "test username 4",
      imgUrl: test1,
      stars: 24,
    },
    {
      id: 34,
      title: "test 3",
      username: "test username 3",
      imgUrl: test5,
      stars: 11,
    },
    {
      id: 35,
      title: "test 4",
      username: "test username 4",
      imgUrl: test2,
      stars: 1,
    },
    {
      id: 36,
      title: "test 5",
      username: "test username 5",
      imgUrl: test3,
      stars: 49,
    },
    {
      id: 37,
      title: "test 6",
      username: "test username 6",
      imgUrl: test4,
      stars: 39,
    },
    {
      id: 38,
      title: "test 7",
      username: "test username 7",
      imgUrl: test2,
      stars: 22,
    },
    {
      id: 39,
      title: "test 8",
      username: "test username 8",
      imgUrl: test1,
      stars: 0,
    },
  ];
  const [original] = useState([...test]);
  const [pairedDown, setPairedDown] = useState([...test]);
  const [array, setArray] = useState(test.splice(0, 10));
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    if (props.selected.recent === true) setArray(sortByRecent(array));
    else if (props.selected.stars === true) setArray(sortByStars(array));
  }, [props.selected]);

  useEffect(() => {
    if (props.searching === true) {
      let searched = updateSearchQuery(original, props.searchQuery);
      if (searched.length > 10) {
        let spliced = searched.splice(0, 10);
        setPairedDown(searched);
        setArray(spliced);
        props.modSearching();
        setShowLoadMore(true);
      } else setArray(searched);
    }
  }, [props.searchQuery]);

  useEffect(() => {
    if (array.length === pairedDown.length) setShowLoadMore(false);
    else setShowLoadMore(true);
  }, [array]);

  function loadMore() {
    setArray(loadMoreSet(array, pairedDown));
  }

  function returnLoadButton() {
    if (showLoadMore === true && props.searching === false) {
      return <LoadMore loadMore={loadMore} />;
    } else return <RefreshNotification />;
  }

  return (
    <div className={styles.feed}>
      {array.map((el: any) => (
        <FeedItem
          id={el.id}
          title={el.title}
          username={el.username}
          imgUrl={el.imgUrl}
          stars={el.stars}
          key={el.id}
        />
      ))}
      {returnLoadButton()}
    </div>
  );
};
