module.exports = {
    beforeEach: (browser) => {
        browser.url('http://localhost:3000')
        .waitForElementVisible('body', 1000)
        console.log('beforeEach')
    },
    // before: (browser) => {
    //     console.log('before')
    // },
    // afterEach: (browser) => {
    //     console.log('afterEach')
    // },
    after: (browser) => {
        console.log('after')
        browser.end()
    },
    'Demo test Nightwatch': (browser) => {
        browser
            .setValue('input[class=enter-location__input]', 'Salt Lake')
            .click('button[class=enter-location__submit]')
            .waitForElementVisible('h3[class=current-weather__location]', 1000)
            .assert.containsText('h3[class=current-weather__location]', 'Salt Lake City')
            .click('.current-weather__search-again')
    },
    'Search by zipcode': (browser) => {
        browser
            .setValue('.enter-location__input', '84111')
            .click('.enter-location__submit')
            .waitForElementVisible('.current-weather__search-again', 1000)
            .assert.containsText('.current-weather__location', 'Salt Lake City')
    }
};