import { NgWater2Page } from './app.po';

describe('ng-water2 App', function() {
  let page: NgWater2Page;

  beforeEach(() => {
    page = new NgWater2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
