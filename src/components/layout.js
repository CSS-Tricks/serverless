import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Nav from "./nav/nav";
import "./global.css";
import styles from "./layout.module.scss";

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={styles.root}>
          <main>{children}</main>
          <Nav location={location} />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
