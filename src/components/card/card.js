import React from "react";
import styles from "./card.module.scss";

const Card = props => (
  <div className={styles.root}>
    <h1>{props.title}</h1>
    <div className="content" dangerouslySetInnerHTML={{ __html: props.html }} />
  </div>
);

export default Card;
