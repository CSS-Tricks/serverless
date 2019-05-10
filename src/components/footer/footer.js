import React from "react";
import { Link } from "gatsby";

import styles from "./footer.module.scss";

const Footer = () => (
  <footer class={styles.homeFooter}>
    <h3>What is Serverless?</h3> Somebody else's computers.{" "}
    <Link to="/about/">Find out more.</Link>
  </footer>
);

export default Footer;
