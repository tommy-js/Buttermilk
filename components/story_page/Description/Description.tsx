import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import styles from "./styles.module.scss";

const emptyStar = require("../../../public/star_empty.png");
const star = require("../../../public/star.png");

interface Props {
  title: string;
  id: string;
  username: string;
  userId: string;
  stars: number;
  timestamp: number;
}

export const Description: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState(false);
  const [starImg, setStarImg] = useState(emptyStar);
  const [totalStars, setTotalStars] = useState(props.stars);
  const [belongsToUser, setBelongsToUser] = useState(true);

  useEffect(() => {
    // Check if this article is liked within user model
    // Also check to see if article belongs to this user
  }, []);

  function returnStar() {
    if (liked === false) {
      let val = totalStars;
      val++;
      setTotalStars(val);
      setStarImg(star);
    } else {
      let val = totalStars;
      val--;
      setTotalStars(val);
      setStarImg(emptyStar);
    }
    setLiked(!liked);
  }

  function returnEdit() {
    if (belongsToUser === true)
      return (
        <button onClick={() => Router.push(`/edit/${props.id}`)}>Edit</button>
      );
    else return null;
  }

  return (
    <div className={styles.description}>
      <div className={styles.upperblock}>
        <p className={styles.title}>{props.title}</p>
      </div>
      {returnEdit()}
      <div className={styles.lowerblock}>
        <Link href={`/user/${props.userId}`}>
          <a className={styles.username}>{props.username}</a>
        </Link>
        <p className={styles.stars}>{totalStars}</p>
        <div className={styles.img_block} onClick={() => returnStar()}>
          <img className={styles.img} src={starImg} />
        </div>
        <p className={styles.timestamp}>{props.timestamp}</p>
      </div>
    </div>
  );
};
