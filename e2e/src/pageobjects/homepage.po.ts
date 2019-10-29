import { browser, by, element, ElementFinder } from 'protractor';
import { BasePage } from './basepage';

browser.waitForAngularEnabled(false);
// browser.ignoreSynchronization = true;
export class HomePage extends BasePage {
  leaderboardButton: ElementFinder;
  coachImage: ElementFinder;
  bannerGDRP: ElementFinder;
  coachButton: ElementFinder;
  videoButton: ElementFinder;
  videoCloseButton: ElementFinder;
  pgaOfAmericaHeadline: ElementFinder;
  levelUpButton: ElementFinder;
  header: ElementFinder;
  coachCarrouselImage: ElementFinder;
  coachOverlayCloseButton: ElementFinder;
  topStoriesHeadline: ElementFinder;
  pgaReachHeadline: ElementFinder;
  footer: ElementFinder;
  searchBreadCrumbs: ElementFinder;
  searchInput: ElementFinder;
  connectButton: ElementFinder;
  escapeButton: ElementFinder;
  coachOverlayVideoButton: ElementFinder;

  constructor() {
    super();

    this.url = 'http://beta.pga.com/';

    this.header = element(
      by.js(() => {
        return document.querySelector(
          'div:nth-child(1) > div > div:nth-child(4) > div > div > div > a > div'
        );
      })
    );

    this.bannerGDRP = element(
      by.css('div.MuiDrawer-root.MuiDrawer-docked button')
    );

    this.leaderboardButton = element(by.css('.jss276 h2'));

    this.pgaOfAmericaHeadline = element(
      by.css(
        'div.MuiBox-root.jss106 > div > div.MuiContainer-root.MuiBox-root > span'
      )
    );

    this.levelUpButton = element(
      by.css('button.MuiTypography-root.MuiTypography-subtitle2')
    );

    this.connectButton = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[4]/div[1]/div/button[2]')
    );

    this.escapeButton = element(
      by.xpath('//*[@id="__next"]/div/div[2]/div/div[4]/div[1]/div/button[3]')
    );

    this.coachCarrouselImage = element(
      by.css(
        'div.MuiBox-root.jss106 > div > div > div:nth-child(3) > div > div:nth-child(3)'
      )
    );

    this.coachOverlayVideoButton = element(by.css('use'));

    this.coachOverlayCloseButton = element(
      by.css('.MuiDialog-scrollPaper > div > button')
    );

    this.topStoriesHeadline = element(by.css('div.MuiBox-root > h4'));

    this.pgaReachHeadline = element(
      by.css('div.MuiBox-root.jss106 > div > div > div > span')
    );
    this.footer = element(
      by.js(() => {
        return document.querySelector(
          'div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div:nth-child(2) > div > span'
        );
      })
    );

    this.searchBreadCrumbs = element(by.css('svg.MuiSvgIcon-root'));
    this.searchInput = element(by.css('.jss24 input'));
  }

  async navigateTo(): Promise<any> {
    return browser.get(this.url);
  }
}
