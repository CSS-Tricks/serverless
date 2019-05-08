import React from "react";
import { withPrefix } from "gatsby";

import styles from "./card.module.scss";

const Card = props => {
  return (
    <div className={`${styles.root} ${props.extraClasses}`}>
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
          {props.url && <a href={props.url}>{props.title}</a>}
          {!props.url && <span>{props.title}</span>}
        </h3>
        {props.author && (
          <p>
            <span className={styles.by}>by</span> {props.author}
          </p>
        )}
        <div
          className={styles.textCardContent}
          dangerouslySetInnerHTML={{ __html: props.html }}
        />
        {props.tags && (
          <div className={styles.tagsArea}>
            {props.tags.map(tag => (
              <button onClick={() => props.tagChanger(tag)}>{tag}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
