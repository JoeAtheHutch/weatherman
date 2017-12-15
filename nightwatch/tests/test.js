const selectors = require('../test_data/css_selectors.js');
const data = require('../test_data/test_data.js');
const functions = require('../test_data/test_functions.js')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000');
    },
    after: browser => {
        browser.end();
    },
    'Does the page load with expected visible elements. JP-59': browser => {
        browser
            .verify.containsText(selectors.messages.title, data.global.title)
            .verify.containsText(selectors.buttons.submit, data.global.buttonText)
            .verify.attributeEquals(selectors.fields.cityZip, 'placeholder', data.global.searchPlaceholder)
    },
    'Does the Search Again button work as expected JP-62': browser => {
        functions.enterValue(selectors.fields.cityZip, '84119', browser)
        browser
            .click(selectors.buttons.submit)
            .waitForElementVisible(selectors.buttons.searchAgain, 5000)
            .click(selectors.buttons.searchAgain)
            .verify.containsText(selectors.messages.title, data.global.title)
            .verify.containsText(selectors.buttons.submit, data.global.buttonText)
            .verify.attributeEquals(selectors.fields.cityZip, 'placeholder', data.global.searchPlaceholder)
    },
    'Does a search by city name work as expected. JP-60': browser => {
        for (var key in data.citySearch) {
            if (data.citySearch.hasOwnProperty(key)) {
                functions.search(data.citySearch[key], browser);
                browser
                    .click(selectors.buttons.searchAgain)
            }
        }
    },
    'Does a search by Zip Code work as expected. JP-60': browser => {
        for (var key in data.zipSearch) {
            if (data.zipSearch.hasOwnProperty(key)) {
                functions.search(data.zipSearch[key], browser);
                browser
                    .click(selectors.buttons.searchAgain)
            }
        }
    },
    'Does an invalid search string (Zip Code mixed with letters) pull the error screen. JP-61': browser => {
        functions.enterValue(selectors.fields.cityZip, data.errorScreen.searchText, browser)
        browser
            .pause(100)
            .click(selectors.buttons.submit)
            .waitForElementVisible(selectors.buttons.tryAgain, 500)
            .verify.containsText(selectors.messages.error, data.errorScreen.message)
            .verify.containsText(selectors.buttons.tryAgain, data.errorScreen.buttonText)
    }
}