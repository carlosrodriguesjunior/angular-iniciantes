import { DemoAppRoutingPage } from './app.po';

describe('demo-app-routing App', () => {
  let page: DemoAppRoutingPage;

  beforeEach(() => {
    page = new DemoAppRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
