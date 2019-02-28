import React from "react";
import SEO from "../components/seo";

import Layout from "../components/layout";

export default ({ children }) => {
  return (
    <>
      <Layout>
        <SEO
          title="The Power of Serverless for Front-End Developers"
          keywords={[`serverless`, `cloud`, `cloud functions`]}
        />
        <h1>The Power of Serverless</h1>
        Stuff
      </Layout>
    </>
  );
};
