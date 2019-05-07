import React, { useState } from "react";

import styles from "./tags.module.scss";

const Tags = props => {
  console.log(props);
  const [currentFilter, setCurrentFilter] = useState("");
  return (
    <nav>
      Topics:
      {props.allTags.map((tag, i) => {
        return (
          <button
            key={tag}
            className={`${styles.button} button-${tag}`}
            onClick={() => setCurrentFilter(tag)}
          >
            {tag}
          </button>
        );
      })}
    </nav>
  );
};

export default Tags;
