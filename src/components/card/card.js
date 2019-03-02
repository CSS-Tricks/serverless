import React from "react";
import { withPrefix } from "gatsby";

import styles from "./card.module.scss";

const Card = props => {
  return (
    <div className={styles.root}>
      <a href={props.url} className={styles.logoHeader}>
        <img
          className={styles.logoImage}
          src={withPrefix(`/${props.logo}`)}
          alt={`Logo for {props.title}`}
        />
      </a>
      <div className={styles.cardContent}>
        <h3>
          <a href={props.url}>{props.title}</a>
        </h3>
        <div
          className={styles.textCardContent}
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </div>
  );
};

export default Card;
