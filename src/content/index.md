---
title: "Homepage"
---

**Serverless.** It's a phenomenon&mdash;a major web trend and bonafide buzzword. It's got some people, myself included, fairly convinced it's the future of computing. Developers of all kinds can take advantage of it, but **this site is mostly interested and focused in how it relates to and helps front-end web developers**. That's my particular area of interest, as someone behind [CSS-Tricks](https://css-tricks.com/), [CodePen](https://codepen.io/), and [ShopTalk Show](https://shoptalkshow.com/).

Let's get one thing out of the way: it still involves servers, so that word _serverless_ might feel a bit disingenuous. It's actually a new way to pay for and work with servers that, in many cases, is _cheaper_ and _easier_ than buying and managing your own servers.

Here's one way to think about it: you can take your front-end skills and do things that typically only a back-end can do. You can write a JavaScript function that you run and receive a response from by hitting a URL. That's sometimes also called _Cloud Functions_ or _Functions as a Service_ (FaaS), which are perhaps better names, but just a part of the whole serverless thing.

Consider the bread-and-butter task of saving and reading things from a database. It's possible to connect to a database entirely through front-end code. Technically, the database still exists on a server (someone's else's computer, as [the famous sticker](/images/there-is-no-cloud.jpg) says), but you don't need to spin up your own server for it to have a home. Now this traditionally back-end job has moved to the front-end, empowering a whole new swath of developers to _build things_.

Why bother with doing a database this way? For one thing, it means you can host the rest of your site much more easily. Wanna build a [React](https://reactjs.org/)-powered blog on [GitHub pages](https://pages.github.com/)? You totally can! Wanna use the super fast static file host [Netlify](https://www.netlify.com/) to build a [Vue](https://vuejs.org/) powered portfolio site? Do it. Front-end developers are now full-stack developers thanks to serverless. This new combination of hosting and using JavaScript and APIs to architect a site has a name: [JAMstack](https://jamstack.org/).

Even [CodePen](https://codepen.io/) is a part of this brave new world. CodePen can be the home of your front-end code that talks to cloud functions and cloud data. Your serverless host in a serverless world!

Using "other people's computers" has rather settled in as the future of computing. "Containers" is a better word for it, meaning technology like [Docker](https://www.docker.com/). Have you ever worked on a project where when you committed code to [git](https://git-scm.com/) and tests ran against that code automatically? That likely happened in a container. Perhaps one powered by [Travis CI](https://travis-ci.org/), [GitHub Actions](https://github.com/features/actions), or your own [Continuous Integration setup](https://about.gitlab.com/product/continuous-integration/). You might think of that as just once slice of serverless. If those containers can do that, they are just executing some code we've written... why not have them to anything else computers can do?

Since this serverless stuff is almost certainly the future, let's embrace it!

<div class="iframe-wrap">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2N_sUmpjzZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
