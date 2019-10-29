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
            alt={`Logo for ${props.title}`}
          />
        </a>
      )}

      {props.icon && (
        <img
          className={styles.icon}
          src={withPrefix(`/img/${props.icon}`)}
          alt=""
        />
      )}

      <div className={styles.cardContent}>
        <h3 className={styles.homePageLink}>
          {props.url && <a href={props.url}>{props.title}</a>}
          {!props.url && <>{props.title}</>}
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
            <span className={styles.topicWrap}>
              <img src={withPrefix(`/img/topic.svg`)} alt="" />
              Topics
            </span>
            {props.tags.map(tag => (
              <button
                className={styles.topic}
                key={tag}
                onClick={() => props.tagChanger(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        {props.topics && (
          <div className={styles.topicsArea}>
            <span className={styles.focus}>
              <img src={withPrefix(`/img/focus.svg`)} alt="" />
              Focus Areas
            </span>
            {props.topics.map(topic => (
              <span key={topic} className={styles.topic}>
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>
      {props.cmsUrl && (
        <a className={styles.cmsLink} href={props.cmsUrl}>
          Edit this!
        </a>
      )}
    </div>
  );
};

export default Card;
