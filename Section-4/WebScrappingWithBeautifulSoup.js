/**
 * Task 11: Web Scraping with BeautifulSoup
Use Python’s BeautifulSoup and requests libraries to scrape the titles of articles from a news website (e.g., BBC or TechCrunch). Output the titles in a structured format.
 */

const puppeteer = require('puppeteer');

(async () => {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the BBC Tech news page
    await page.goto('https://www.bbc.com/news/technology');

    // Scrape the article titles
    const titles = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('h3')).map(article => article.innerText);
    });

    // Print the article titles
    titles.forEach((title, index) => {
        console.log(`Article ${index + 1} title: ${title}`);
    });

    // Close the browser
    await browser.close();
})();
