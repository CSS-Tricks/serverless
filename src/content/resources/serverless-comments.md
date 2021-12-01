---
title: "Building a Serverless Comments System"
link: "https://css-tricks.com/build-custom-cms-serverless-static-site-generator/"
author: "James Wren"
tags: ["dynamodb", "appsync", "graphql"]
---

In this post, we will create a simple serverless comment system to be used on a blog. Creating an application serverlessly has many benefits; reduced costs, little/no maintenance, a faster pace of development, implicit scalability, the list goes on. This example application will use some technologies provided by AWS to create a comment system that will be able to list comments from other users, post new comments and display posts from other users in real time.
