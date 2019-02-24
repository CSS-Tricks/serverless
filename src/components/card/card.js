import React from "react";
import { withPrefix } from "gatsby";

import styles from "./card.module.scss";

const Card = props => {
  return (
    <div className={styles.root}>
      <a href={props.url}>
        <img
          className={styles.logoImage}
          src={withPrefix(`/${props.logo}`)}
          alt={`Logo for {props.title}`}
        />
      </a>
      <h1>
        <a href={props.url}>{props.title}</a>
      </h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </div>
  );
};

export default Card;
