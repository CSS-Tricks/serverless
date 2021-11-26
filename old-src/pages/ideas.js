import React, { useEffect } from "react";

import styles from "./ideas.module.scss";
import ideas from "./ideas.json";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";

const IdeasPage = () => {
  useEffect(() => {
    document.body.classList.remove("homepage");
    document.body.classList.remove("menu-open");
  });
  return (
    <>
      <SEO title="Ideas" />
      <PageHeader title="Ideas" className={styles.pageHeader}>
        <h2>Want to play with serverless technology?</h2>
        <p>That's a great way to learn. Here are some&nbsp;ideas.</p>
      </PageHeader>

      <div className={`grid ${styles.ideasCardGrid}`}>
        {ideas.map(idea => (
          <Card
            icon={idea.icon}
            title={idea.title}
            key={idea.title}
            topics={idea.topics}
            html={idea.description}
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default IdeasPage;
