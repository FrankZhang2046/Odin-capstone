const puppeteer = require('puppeteer');
const fs = require('fs');
const url = process.argv[2];

(async ()=>{
    const browser = await puppeteer.launch({headerless: true});
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_0_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A404 Safari/601.1');

    await page.goto(`${url}`);
    // await page.waitForSelector('#kenneth-modal');

    const paragraphs = await page.$$eval('p', paras => paras.map(item => item.textContent));

    fs.writeFile('article.txt', paragraphs, (err) => {
        if (err) throw err;
        process.exit();
    });

    await browser.close();
    process.exit(1);
})();