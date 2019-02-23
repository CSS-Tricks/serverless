import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AuthServices from "../pages/services/auth";
import CMSs from "../pages/services/cmss";

const ServicesPage = props => {
  return (
    <>
      <Layout>
        <SEO title="Services" />

        <AuthServices />
        <CMSs />
      </Layout>
    </>
  );
};

export default ServicesPage;
