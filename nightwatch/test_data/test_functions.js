const selectors = require('../test_data/css_selectors');
const data = require('../test_data/test_data')

module.exports = {
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    },
    search: (searchData, browser) => {
        browser
            .clearValue(selectors.fields.cityZip)
            .setValue(selectors.fields.cityZip, searchData.searchString)
            .verify.value(selectors.fields.cityZip, searchData.searchString)
            .click(selectors.buttons.submit)
            .waitForElementVisible(selectors.buttons.searchAgain, 500)
            .verify.containsText(selectors.fields.locationTitle, searchData.location)
    }
}