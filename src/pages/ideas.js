import React from "react";

import styles from "./page.module.scss";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";
import Idea from "../components/idea/idea";
import ideas from "./ideas.json";

const IdeasPage = () => (
  <>
    <SEO title="Ideas" />
    <PageHeader title="Ideas">
      <h2>Want to play with serverless technology?</h2>
      <p>That's a great way to learn. Here are some ideas.</p>
    </PageHeader>

    <div className={styles.grid}>

      {ideas.map((idea) => 
        <Idea title={idea.title} tags={idea.tags} description={idea.description} />
      )}

    </div>
  </>
);

export default IdeasPage;
