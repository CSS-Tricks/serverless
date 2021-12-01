---
link: "http://www.bbc.co.uk/blogs/internet/entries/5bdabd53-090e-4611-a5d5-4faea05aeb35"
title: "Powering BBC Online with nanoservices"
author: "Matthew Clark"
tags: ["rest", "architecture"]
---

We’ve created a simple internal platform that allows nanoservices to be uploaded, as code. It then allows a nanoservice to be executed on demand, via a RESTful API. There are no containers or servers dedicated to each nanoservice; instead, they all run on a shared platform. Which for us is a set of auto-scaling cloud instances.
