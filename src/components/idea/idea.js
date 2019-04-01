import React from "react";

import styles from "./idea.module.scss";

export default props => {
  const { title, tags, description} = props;
  return <div>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{__html: description}} />
  </div>;
};
