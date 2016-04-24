'use strict';

describe('liber-coffe', function() {

  xit('should automatically redirect to / when location is empty', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should display some text', function() {
    browser.get('/');
    expect(element.all(by.css('p')).first().getText())
      .toMatch("Stuff here");
  });

});
