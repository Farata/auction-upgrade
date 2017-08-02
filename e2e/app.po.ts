import { browser, by, element } from 'protractor';

export class AuctionUpgradePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngbay-root h1')).getText();
  }
}
