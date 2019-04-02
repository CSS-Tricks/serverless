import React from "react";

import styles from "./idea.module.scss";

export default props => {
  const { title, tags, description } = props;
  return (
    <div className={styles.idea}>
      <div className={styles.ideaTags}>
        {tags.map(tag => (
          <span className={styles.tagWrap}>
            <span>{tag}</span>
          </span>
        ))}
      </div>
      <h2 className={styles.ideaTitle}>{title}</h2>
      <div
        className={styles.ideaDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
