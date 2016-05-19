'use strict';

describe('liber-coffee', function() {

  it('should read a hash right', function() {
    browser.get('/#/msfCbB');
    expect(element.all(by.css('#perk > h2')).first().getText()).toMatch("PLAS-3 'Singe'");
  });

  xit('should produce and read hashes for sharing', function() {
    browser.get('/');
    var oldPerkName = element.all(by.css('#perk > h2')).first().getText();
    var oldPrimaryName = element.all(by.css('#primary > h2')).first().getText();
    var oldStrat1Img = element.all(by.css('#stratagems > div')).get(0).getCssValue('background-image');
    var oldStrat2Img = element.all(by.css('#stratagems > div')).get(1).getCssValue('background-image');
    var oldStrat3Img = element.all(by.css('#stratagems > div')).get(2).getCssValue('background-image');
    var oldStrat4Img = element.all(by.css('#stratagems > div')).get(3).getCssValue('background-image');

    for(var i = 0;i<10;i++) {
      var urlPromise = element.all(by.binding('url')).first().getText();
      var newURL = '';
      urlPromise.then(function(text) {
        newURL = text;
      });
      browser.wait(urlPromise, 5*1000)
      console.log(newURL);
      browser.get(newURL);

      var newPerkName = element.all(by.css('#perk > h2')).first().getText();
      var newPrimaryName = element.all(by.css('#primary > h2')).first().getText();
      var newStrat1Img = element.all(by.css('#stratagems > div')).get(0).getCssValue('background-image');
      var newStrat2Img = element.all(by.css('#stratagems > div')).get(1).getCssValue('background-image');
      var newStrat3Img = element.all(by.css('#stratagems > div')).get(2).getCssValue('background-image');
      var newStrat4Img = element.all(by.css('#stratagems > div')).get(3).getCssValue('background-image');

      expect(newPerkName).toMatch(oldPerkName);
      expect(newPrimaryName).toMatch(oldPrimaryName);
      expect(newStrat1Img).toMatch(oldStrat1Img);
      expect(newStrat2Img).toMatch(oldStrat2Img);
      expect(newStrat3Img).toMatch(oldStrat3Img);
      expect(newStrat4Img).toMatch(oldStrat4Img);

      element.all(by.css('#randomizer')).first().click()

      oldPerkName = element.all(by.css('#perk > h2')).first().getText();
      oldPrimaryName = element.all(by.css('#primary > h2')).first().getText();
      oldStrat1Img = element.all(by.css('#stratagems > div')).get(0).getCssValue('background-image');
      oldStrat2Img = element.all(by.css('#stratagems > div')).get(1).getCssValue('background-image');
      oldStrat3Img = element.all(by.css('#stratagems > div')).get(2).getCssValue('background-image');
      oldStrat4Img = element.all(by.css('#stratagems > div')).get(3).getCssValue('background-image');
    }

  });
});
