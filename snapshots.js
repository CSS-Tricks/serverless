const PercyScript = require("@percy/script");

PercyScript.run(async (page, percySnapshot) => {
  // the `page` object here is Puppeteer!
  // https://github.com/GoogleChrome/puppeteer
  await page.goto("http://localhost:9000/");

  // ensure the page has loaded before capturing a snapshot
  await page.waitFor("#gatsby-focus-wrapper");

  await percySnapshot("homepage");

  // ensure the page has loaded before capturing a snapshot
  await page.goto("http://localhost:9000/services/major", {
    waitUntil: "networkidle0"
  });

  await percySnapshot("Services/Major");
});
