const PercyScript = require("@percy/script");

PercyScript.run(async (page, percySnapshot) => {
  // the `page` object here is Puppeteer!
  // https://github.com/GoogleChrome/puppeteer
  await page.goto("http://localhost:9000/");
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor("#gatsby-focus-wrapper");
  await percySnapshot("homepage");

  await page.goto("http://localhost:9000/services/major");
  await page.waitFor("#gatsby-focus-wrapper");
  await percySnapshot("Services Page");

  await page.goto("http://localhost:9000/resources");
  await percySnapshot("Resources with More Closed");
  await page.click("#more-resources-button");
  await page.waitFor(501);
  await percySnapshot("Resources with More Open");

  // Waiting for idle network
  await page.goto("http://localhost:9000/services/major", {
    waitUntil: "networkidle0"
  });
  await page.evaluate(() => {
    document
      .querySelector(".card-module--homePageLink--ZPUCK > a")
      .setAttribute("data-focus", true);
  });
  await percySnapshot("Services/Major");
});
