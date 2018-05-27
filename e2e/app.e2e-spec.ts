import { FlightWaysPage } from './app.po';

describe('flight-ways App', () => {
  let page: FlightWaysPage;

  beforeEach(() => {
    page = new FlightWaysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
