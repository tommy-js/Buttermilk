import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

const star = require("../../../public/star.png");
const emptyStar = require("../../../public/star_empty.png");

interface Props {
  title: string;
  username: string;
  userId: string;
  stars: number;
}

export const Details: React.FC<Props> = (props) => {
  const [starImg, setStarImg] = useState(emptyStar);
  const [selected, setSelected] = useState(false);
  const [starVal, setStarVal] = useState(props.stars);

  useEffect(() => {
    // Check user model to see if user has already liked page
  }, []);

  function modStar() {
    if (selected === false) {
      setStarImg(star);
      let val = starVal;
      val++;
      setStarVal(val);
    } else {
      setStarImg(emptyStar);
      let val = starVal;
      val--;
      setStarVal(val);
    }
    setSelected(!selected);
  }

  return (
    <div className={styles.details}>
      <p className={styles.title}>{props.title}</p>
      <Link href={`/user/${props.userId}`}>
        <a className={styles.username}>{props.username}</a>
      </Link>
      <div className={styles.stars_img} onClick={() => modStar()}>
        <img className={styles.img} src={starImg} />
      </div>
      <p className={styles.stars}>{starVal}</p>
    </div>
  );
};
