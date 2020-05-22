const puppeteer = require('puppeteer');
const path = require("path");

module.exports = class Blowser{
    constructor (url,pdfPath) {
         this.url = url;
         this.pdfPath = pdfPath;
         
    }
    invoke (){

        //const querySelector = "#js-repo-pjax-container > div.pagehead.repohead.hx_repohead.readability-menu.bg-gray-light.pb-0.pt-3 > div > div > h1 > span.author.ml-2.flex-self-stretch";
        const pdffullpath = path.join(this.pdfPath,"hh.pdf");
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(this.url, {waitUntil: 'networkidle2'});
            /*
            await page.evaluate(() => { 
                document.querySelector(querySelector).style.backGroundColor = "red";
            });
            */

            await page.pdf({path: pdffullpath, format: 'A4'});

            await browser.close();
        })();
    }
}