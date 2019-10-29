const PercyScript = require("@percy/script");

PercyScript.run(async (page, percySnapshot) => {
  await page.goto("http://localhost:9000/");
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor("#gatsby-focus-wrapper");
  await percySnapshot("homepage");

  await page.goto("http://localhost:9000/services/major");
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor("#gatsby-focus-wrapper");
  await percySnapshot("Services/Major");
});
