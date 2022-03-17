import styles from "./footer.module.scss";

const Footer = (props) => (
  <footer className={styles.homeFooter}>
    {!props.noWhatIs && (
      <>
        <h3 className={styles.whatis}>Yeah, but what is serverless?</h3>
        <div className={styles.findOutWrap}>
          <a href="/about/" className={styles.findOut}>
            Find out →
          </a>
        </div>
      </>
    )}

    <br />
    <img src="/images/footer-sep.svg" alt="" className={styles.footerSep} />
    <p>
      Got a correction? Something to add?{" "}
      <a href="https://github.com/CSS-Tricks/serverless">
        There is a GitHub Repo
      </a>{" "}
      where you can contribute or open an&nbsp;issue.{" "}
      <a href="https://www.digitalocean.com/legal/">Legal</a>
    </p>
  </footer>
);

export default Footer;
