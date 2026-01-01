const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const logs = [];
    const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
    const page = await browser.newPage();

    page.on('console', msg => {
        const text = msg.text();
        const type = msg.type();
        const line = `PAGE ${type.toUpperCase()}: ${text}`;
        console.log(line);
        logs.push(line);
    });

    page.on('pageerror', err => {
        const line = `PAGE ERROR: ${err.toString()}`;
        console.log(line);
        logs.push(line);
    });

    page.on('requestfailed', req => {
        const failure = req.failure() || {};
        const line = `REQUEST FAILED: ${req.url()} - ${failure.errorText || 'unknown'}`;
        console.log(line);
        logs.push(line);
    });

    const fileUrl = 'file://' + path.resolve(process.cwd(), 'index.html');
    console.log('Opening', fileUrl);
    try {
        await page.goto(fileUrl, {waitUntil: 'networkidle2', timeout: 15000});
    } catch (e) {
        const line = `GOTO ERROR: ${e.toString()}`;
        console.log(line);
        logs.push(line);
    }

    // Wait a bit to let scripts run (use generic timeout for compatibility)
    await new Promise(res => setTimeout(res, 2500));

    await browser.close();

    const outPath = path.resolve(process.cwd(), 'puppeteer-console-output.txt');
    fs.writeFileSync(outPath, logs.join('\n') || 'NO LOGS', 'utf8');
    console.log('Saved logs to', outPath);
})();
