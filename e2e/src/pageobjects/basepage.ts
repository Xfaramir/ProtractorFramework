import { browser, element, ElementFinder, by, protractor } from 'protractor';

const EC = protractor.ExpectedConditions;
export class BasePage {
  url: string;
  bannerGDRP: ElementFinder;

  searchNavButton: ElementFinder;
  searchNavInput: ElementFinder;
  leaderboardButton: ElementFinder;
  constructor() {
    this.bannerGDRP = element(
      by.css('div.MuiDrawer-root.MuiDrawer-docked button')
    );
    this.leaderboardButton = element(by.css('.jss276 h2'));
    this.searchNavButton = element(by.css('header button'));

    this.searchNavInput = element(by.css('nav input'));
  }

  async navigateTo() {
    return await browser.get(browser.baseUrl);
  }

  async navigateToWeb(WebUrl) {
    await browser.get(WebUrl);
  }

  async hitEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }
  /**
   * switches focus to a new (last) window
   */
  async switchToNewWindow() {
    await browser.getAllWindowHandles().then(handles => {
      browser.switchTo().window(handles[handles.length - 1]);
    });
  }

  async closeNewWindow() {
    await browser.getAllWindowHandles().then(handles => {
      browser.close();
      // the parent should be 2 less than the length of all found window handlers
      // browser.switchTo().window(handles.length - 2);
    });
  }

  async focusMouse(elem) {
    await browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async expectAndFocus(elem) {
    await browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async expectElement(elem) {
    await browser.wait(EC.presenceOf(elem), 15000);
  }
  async expectVisibility(elem) {
    await browser.wait(EC.visibilityOf(elem), 12000);
  }

  async expectInVisibility(elem) {
    await browser.wait(EC.invisibilityOf(elem), 3000);
  }

  async expectClickable(elem) {
    await browser.wait(EC.elementToBeClickable(elem));
  }
  async expectAndScroll(elem: ElementFinder) {
    await browser.wait(EC.presenceOf(elem), 15000);
    await browser.executeScript(
      'arguments[0].scrollIntoView(true)',
      elem.getWebElement()
    );
  }

  async expectAndFocusTime(elem, duration) {
    browser.wait(EC.presenceOf(elem), duration);
    browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async scrollCenter(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "center"})',
      ele.getWebElement()
    );
  }

  async scrollStart(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "start"})',
      ele.getWebElement()
    );
  }

  async scrollEnd(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "end"})',
      ele.getWebElement()
    );
  }

  async scrollNearest(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "nearest"})',
      ele.getWebElement()
    );
  }

  async sendEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }
}
