const puppeteer = require("puppeteer");

const screenshot = async (url) => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setViewport({
    width: 1024,
    height: 768,
  });

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  // console.log(await page.content());
  await page.screenshot({ path: "screenshot.png", fullPage: false });

  await browser.close();
};

screenshot(
  "http://www.amazon.co.uk/Book-Trees-Visualizing-Branches-Knowledge/dp/1616892188/ref=sr_1_7?ie=UTF8&qid=1423938994&sr=8-7&keywords=neo4j"
);
