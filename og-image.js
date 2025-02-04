import puppeteer from "puppeteer";
import fs from "fs";

export default async function ogImage(title) {
  const outputPath = `./dist/assets/og-image-${title.replace(/\s+/g, "-").toLowerCase()
    }.png`;

  // If the OG image already exists, return its path
  if (fs.existsSync(outputPath)) {
    return outputPath.replace("./dist", "");
  }

  // Start Puppeteer
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Set viewport to match Open Graph image size
  await page.setViewport({ width: 1200, height: 630 });

  const logoPath = "file://" + process.cwd() + "/pages/public/logo.png";

  // Set up HTML for the OG image
  const htmlContent = `
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

            body {
              width: 1200px;
              height: 630px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: #222;
              color: white;
              font-family: 'Inter', sans-serif;
              text-align: center;
              font-size: 48px;
              font-weight: bold;
              border: 10px solid #ff4136;
              position: relative;
            }

            .logo {
              position: absolute;
              top: 40px;
              left: 40px;
              width: 150px;
            }

            .title {
              max-width: 1000px;
              text-transform: uppercase;
            }

            .footer {
              position: absolute;
              bottom: 40px;
              font-size: 24px;
              color: #ff4136;
            }
          </style>
        </head>
        <body>
          <img class="logo" src="${logoPath}" alt="Chai.js Logo">
          <div class="title">${title}</div>
          <div class="footer">chai.js | BDD/TDD Assertion Library</div>
        </body>
      </html>
    `;

  await page.setContent(htmlContent);

  // Screenshot and save the OG image
  await page.screenshot({ path: outputPath });

  await browser.close();

  return outputPath.replace("./dist", "");
}
