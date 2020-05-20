const puppeteer = require('puppeteer');

// const Animal = require('./puppeteer_init.js');
// var inu  = new Animal('わんわん');


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/KatsutoshiOtogawa/How_To_add_windows_update_to_WindowsImage', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();

// you 
// /html/body/div[4]/div/main/div[1]/div/div/h1/span[2]/a