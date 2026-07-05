const puppeteer = require('puppeteer-core');

(async () => {
    try {
        const response = await fetch('http://127.0.0.1:9222/json/version');
        const data = await response.json();
        const browserWSEndpoint = data.webSocketDebuggerUrl;
        
        const browser = await puppeteer.connect({ browserWSEndpoint, defaultViewport: null });
        const pages = await browser.pages();
        
        for (let p of pages) {
            console.log(await p.url(), await p.title());
        }
        await browser.disconnect();
    } catch (e) {
        console.error("Error:", e);
    }
})();
