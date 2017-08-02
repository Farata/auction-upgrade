import { AuctionUpgradePage } from './app.po';

describe('auction-upgrade App', () => {
  let page: AuctionUpgradePage;

  beforeEach(() => {
    page = new AuctionUpgradePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ngbay!');
  });
});
