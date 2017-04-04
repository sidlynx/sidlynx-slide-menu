import { SidlynxSlideMenuPage } from './app.po';

describe('sidlynx-slide-menu App', () => {
  let page: SidlynxSlideMenuPage;

  beforeEach(() => {
    page = new SidlynxSlideMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
