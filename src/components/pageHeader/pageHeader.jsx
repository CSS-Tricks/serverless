import styles from "./pageHeader.module.scss";

const PageHeader = (props) => {
  return (
    <header className={`${styles.root} ${props.className}`}>
      <div className={styles.logoArea}>
        <a href="/">
          <img
            className={styles.logo}
            src="/images/css-tricks.svg"
            alt="CSS-Tricks Presents"
          />
        </a>
        <div>
          The Power of <strong>Serverless</strong>
          <br /> for Front-End Developers
        </div>

        <a className={styles.menuButton} href="#nav">
          <span className="screen-reader-text">Toggle Menu</span>
          <img
            src="/images/menu-button.svg"
            alt="Jump to Menu Button"
            className={styles.toggleImg}
          />
        </a>
      </div>

      <div className={styles.h1wrap} data-title={props.title}>
        {props.title && <h1>{props.title}</h1>}
      </div>

      <div className={styles.subtitleArea} data-title={props.title}>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
