import { HomePage } from '../../pageobjects/homepage.po';
import {
  browser,
  logging,
  element,
  by,
  ElementFinder,
  protractor
} from 'protractor';

const page = new HomePage();

describe('Home Page', () => {
  beforeAll(async () => {
    console.log('Starting Home Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('should display headline', async () => {
    await expect(page.header.getText()).toEqual('START YOUR JOURNEY');
  });

  it('should close gdrp banner', async () => {
    await page.expectVisibility(page.bannerGDRP);
    await page.bannerGDRP.click();
    await page.expectInVisibility(page.bannerGDRP);
  });

  it('should display leaderboard', async () => {
    await page.expectAndScroll(page.leaderboardButton);
  });

  it('should coach pga of america headline options', async () => {
    await page.expectVisibility(page.pgaOfAmericaHeadline);
    await page.scrollCenter(page.pgaOfAmericaHeadline);
    await expect(page.pgaOfAmericaHeadline.getText()).toEqual(
      'THE PGA OF AMERICA'
    );
  });
  it('should focus 1 carrousel slide group option Level up', async () => {
    await page.scrollCenter(page.levelUpButton);
  });

  it('should switch carrousel category', async () => {
    await page.expectClickable(page.connectButton);
    await page.connectButton.click();
    await page.scrollCenter(page.levelUpButton);
  });

  it('should open overlay', async () => {
    await page.expectClickable(page.coachCarrouselImage);
    await page.coachCarrouselImage.click();
  });

  it('should  play video', async () => {
    await page.coachOverlayVideoButton.click();
    await browser.sleep(2000);
  });

  it('should close overlay and display headline top series', async () => {
    await page.expectClickable(page.coachOverlayCloseButton);
    await page.coachOverlayCloseButton.click();
    await page.scrollStart(page.topStoriesHeadline);
    const headlineText = await page.topStoriesHeadline.getText();
    expect(headlineText).toEqual('Top Stories');
  });

  it('should display pga reach', async () => {
    const pgareachText = await page.pgaReachHeadline.getText();
    expect(pgareachText).toEqual('PGA REACH');
    await page.scrollCenter(page.pgaReachHeadline);
  });

  it('should display footer', async () => {
    const footerText = await page.footer.getText();
    expect(footerText).toEqual('EXPLORE');
    await page.scrollStart(page.footer);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    //   const logs = await browser
    //   .manage()
    //   .logs()
    //   .get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
