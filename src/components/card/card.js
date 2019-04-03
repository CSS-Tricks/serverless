import React from "react";
import { withPrefix } from "gatsby";

import styles from "./card.module.scss";

const Card = props => {
  let classes = "";
  if (props.tags) {
    props.tags.forEach(tag => (classes += " " + tag));
  }

  return (
    <div className={`${classes} ${styles.root} ${props.extraClasses}`}>
      {props.logo && (
        <a href={props.url} className={styles.logoHeader}>
          <img
            className={styles.logoImage}
            src={withPrefix(`/${props.logo}`)}
            alt={`Logo for {props.title}`}
          />
        </a>
      )}

      <div className={styles.cardContent}>
        <h3>
          <a href={props.url}>{props.title}</a>
        </h3>
        {props.author && <p>by {props.author}</p>}
        <div
          className={styles.textCardContent}
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
      </div>
    </div>
  );
};

export default Card;
