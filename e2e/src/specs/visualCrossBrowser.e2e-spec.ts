import { HomePage } from '../pageobjects/homepage.po';
import { browser, logging, element, by, protractor } from 'protractor';
import ViewEyes from '../../config/eyeConfig';

// Testing Json File with list of Url to be tested.
const json = require('../../config/target.json');

const Eyes = require('eyes.selenium').Eyes;
const eyes = new Eyes();

for (const site of json) {
  if (site.pages) {
    describe(`${site.name}s`, () => {
      const setupEye = new ViewEyes('PGA REDESIGN', 'PGA BATCH', '014');
      setupEye.setup(eyes);
      const web = new HomePage();

      site.pages.forEach(page => {
        if (page.Run === true) {
          beforeAll(async () => {});

          beforeEach(async () => {});

          it(`${page.Page}`, async () => {
            console.log(page.URL);

            await eyes.open(browser, page.Locale, page.Page + ' ..');
            await browser.driver.manage().deleteAllCookies();
            await web.navigateToWeb(page.URL);

            await web.expectVisibility(web.bannerGDRP);
            await web.bannerGDRP.click();
            await web.expectInVisibility(web.bannerGDRP);

            await eyes.checkWindow(page.URl);
            await eyes.close().then(result => {
              setupEye.handleResult(result);
            });
          });
        }
      });
    });
  }
}
