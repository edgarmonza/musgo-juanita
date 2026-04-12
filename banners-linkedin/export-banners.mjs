import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = `file://${path.join(__dirname, 'banners.html')}`;
const outputDir = path.join(__dirname, 'png');

async function exportBanners() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport wide enough for full-size banners
  await page.setViewport({ width: 1800, height: 8000, deviceScaleFactor: 2 });

  await page.goto(htmlPath, { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  // Make sure safe zone overlays are hidden
  await page.evaluate(() => document.body.classList.remove('show-zones'));

  // Get all banner elements
  const banners = await page.$$('.banner');
  console.log(`Found ${banners.length} banners`);

  for (let i = 0; i < banners.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const filename = path.join(outputDir, `musgo-linkedin-banner-${num}.png`);

    // Screenshot each banner at exact 1584x396 (with 2x deviceScaleFactor = 3168x792 actual pixels)
    await banners[i].screenshot({
      path: filename,
      type: 'png',
      clip: undefined, // use element bounds
    });

    console.log(`✓ Banner ${num} → ${filename}`);
  }

  await browser.close();
  console.log(`\nDone! ${banners.length} banners exported to ${outputDir}`);
}

exportBanners().catch(console.error);
