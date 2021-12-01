---
title: "Creating an Image thumbnail generator using Vue, AWS, and Serverless"
link: "https://medium.com/@rmmmsy/creating-an-image-thumbnail-generator-using-vue-aws-and-serverless-part-1-the-setup-5d187b0bb1e1"
author: "Ramsay Lanier"
tags: ["s3", "lambda", "cloud-functions"]
---

Create a basic web application that uploads an image to an Amazon Web Services S3 bucket which will trigger an AWS Lambda function that will create several thumbnail images at different sizes. Once the images have been created, they'll be put into a different S3 bucket and rendered! We'll be using the Serverless framework to easily setup, manage, and deploy our AWS resources and lambda function. We'll be using Vue on the front-end to build several components.
