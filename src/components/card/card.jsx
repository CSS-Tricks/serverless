import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <div
      className={`${styles.root} ${props.extraClasses} card`}
      data-tags={props.tags?.map((tag) => tag)}
    >
      {props.logo && (
        <a href={props.link} className={styles.logoHeader}>
          <img
            className={styles.logoImage}
            src={`/logos/${props.logo}`}
            alt={`Logo for ${props.title}`}
          />
        </a>
      )}
      {props.icon && (
        <img className={styles.icon} src={`/images/${props.icon}`} alt="" />
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.homePageLink}>
          {props.link && <a href={props.link}>{props.title}</a>}
          {!props.link && <>{props.title}</>}
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
              <img src="/images/topic.svg" alt="" />
              Topics
            </span>
            <div className="card-tags">
              {props.tags.map((tag) => (
                <button
                  className={styles.topic}
                  onClick={() => props.tagChanger(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
        {props.topics && (
          <div className={styles.topicsArea}>
            <span className={styles.focus}>
              <img src="/images/focus.svg" alt="" />
              Focus Areas
            </span>
            <div className="card-tags">
              {props.topics.map((topic) => (
                <span key={topic} className={styles.topic}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {props.cmsUrl && (
        <a className={styles.cmsLink} href={props.cmsUrl}>
          Edit this
        </a>
      )}
    </div>
  );
};

export default Card;
