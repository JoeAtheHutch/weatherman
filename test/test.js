module.exports = {
    'Demo test Google': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body', 1000)
            .setValue('input[class=enter-location__input]', 'Salt Lake')
            .click('button[class=enter-location__submit]')
            .waitForElementVisible('h3[class=current-weather__location]', 1000)
            .assert.containsText('h3[class=current-weather__location]', 'Salt Lake City')
            .end();
    }
};