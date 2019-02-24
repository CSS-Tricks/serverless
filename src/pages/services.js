import React from "react";

import Layout from "../components/layout";
import ServicesNav from "../pages/services/nav";
import SEO from "../components/seo";

const ServicesPage = props => {
  return (
    <>
      <Layout>
        <SEO title="Services" />

        <ServicesNav />
      </Layout>
    </>
  );
};

export default ServicesPage;
