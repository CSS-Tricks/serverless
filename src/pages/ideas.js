import React from "react";

import styles from "./page.module.scss";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";

const IdeasPage = () => (
  <>
    <SEO title="Ideas" />
    <PageHeader title="Ideas">
      <h2>Want to play with serverless technology?</h2>
      <p>That's a great way to learn. Here are some ideas.</p>
    </PageHeader>

    <div className={styles.ideasWrap}>
      {/*
        A Blog

        ["Auth", "Database", "Media Storage"]

        Static site builders are a perfect match for modern static file hosts, but there is another way you can build a serverless blog as well. You could store and manage the structured data as JSON stored in the cloud and build it as an SPA.

        <a href="https://blog.codepen.io/2018/01/15/build-serverless-blog-codepen/">Here's a complete tutorial</a> on building a blog using mostly Firebase. A bonus feature could be having an <a href="https://cloudinary.com/documentation/upload_images">image uploader via Cloudinary</a>, a cloud function for Markdown processing, or <a href="https://github.com/serverless/examples/tree/master/aws-node-fetch-file-and-store-in-s3">storing and fetching files in S3</a> with Serverless.
      */}
      {/*
      A Food Log 

      ['Auth', 'Database']

      A web form could be used to log what you ate and the calories. Then you could chart the data and offer daily/weekly/monthly summaries.

      Here's <a href="https://codepen.io/chriscoyier/project/editor/AyNRzq">a barebones food log app</a> using Firebase on CodePen Projects.
      */}
      {/*
      A Recipe Site

      ['Cloud Functions', 'Notifications']

      What if a static site full of featured recipes offered a feature to let you send a text message of the complete recipe to your phone?

      A cloud function to send an SMS message through <a href="https://www.twilio.com/">Twilio</a> is a great way to wet your feet with serverless technology. The Twilio <a href="https://www.twilio.com/docs/libraries/node">Node Helper Library</a> provides a simple example function you can put on something like <a href="https://webtask.io/">Webtask</a> and call with <a href="https://codepen.io/chriscoyier/pen/OzjgPB/">a simple form</a> or <a href="https://codepen.io/chriscoyier/pen/xPMpGM/">through JavaScript</a>.
      */}
      {/*
      A TODO App 

      ['Database'],

      This classic app doesn't just have to be a demo.  Your version could be personalized to your needs, or compete on features and UX with all the others out there.

      <a href="http://todomvc.com/">TodoMVC</a> has examples of how to build a to do app in loads of different JavaScript frameworks. Now it's your job to hook them up to a data store and add features.

      */}
      {/*
      API Endpoints

      ['Database']

      Imagine you have a database full of data you'd like to give people API access to. The functions to retrieve and format that data are a perfect fit for cloud functions. GraphQL is worth looking into here.
      
      <a href="https://css-tricks.com/front-end-developers-guide-graphql/">A Front End Developer’s Guide to GraphQL</a><br><a href="https://www.twilio.com/blog/2017/06/build-serverless-api-amazon-web-services-api-gateway.html">How to Build a Serverless API with Amazon Web Services’ API Gateway</a>

      */}
    </div>
  </>
);

export default IdeasPage;
