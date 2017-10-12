const selectors = require('../data/selectors')
const testData = require('../data/testData')


module.exports={
    beforeEach: (browser) => {
        browser
            .url(selectors.host)
            .waitForElementPresent('body', 1000)
    },
    'Can enter a zip in the search bar': (browser) => {
        browser
            .setValue(selectors.homeScreen.searchBar, testData.goodData.zipCode)
            .click(selectors.homeScreen.submitButton)
            .waitForElementNotVisible(selectors.homeScreen.searchBar)
    }
}