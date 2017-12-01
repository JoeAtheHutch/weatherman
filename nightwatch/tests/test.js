const data = require('../test_data/data')
const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')

module.exports = {
    before: browser => {
        browser.url(data.globals.url) //loads the page initially
    },
    after: browser => {
        browser.end() //closes the browser when tests are complete
    },
    'Search by city name': browser => {
        browser
            .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
            .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
            .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
        functions.enterValue(selectors.enterLocation.searchBox, data.citySearch.searchString, browser) //enters the search string
        browser
            .click(selectors.enterLocation.submitButton) //clicks the search button
            .waitForElementVisible(selectors.currentWeather.currentTemp, 2000) //waits for the next screen to load by waiting for the current temperature
            .verify.containsText(selectors.currentWeather.title, data.globals.title) //is the title on this screen right?
            .verify.containsText(selectors.currentWeather.location, data.citySearch.cityResult) //is the result city correct?
            .verify.elementPresent(selectors.currentWeather.icon) //without a LOT more logic, we can't test the icon being displayed, just that it is present.
            // .verify.containsText(selectors.currentWeather.currentTemp, data.citySearch.currentTemp)
            // you'd use that style verify if you are using plain text as data for the results.  RegEx goes a little differently.
            .expect.element(selectors.currentWeather.currentTemp).text.to.match(data.citySearch.currentTemp) //is the current temp in the right format?
        // using an .expect instead of a .verify or .assert ends the browser chain.  Plus, where .verify will continue
        // tests after a failure, just about anything else off of the browser will stop on a failure.
        // So, we need to restart the browser chain after each .expect, AND be aware that it could end our test.
        browser.expect.element(selectors.currentWeather.maxTemp).text.to.match(data.citySearch.maxTemp) //is the max temp in the right format?
        browser.expect.element(selectors.currentWeather.minTemp).text.to.match(data.citySearch.minTemp) //is the min temp in the right format?
        browser.expect.element(selectors.currentWeather.wind).text.to.match(data.citySearch.wind) //is the wind in the right format?
        browser.expect.element(selectors.currentWeather.humidity).text.to.match(data.citySearch.humidity) //is the humidity in the right format?
        browser
            .verify.containsText(selectors.currentWeather.searchAgainButton, data.citySearch.buttonText) //is the button text as expected?
            .click(selectors.currentWeather.searchAgainButton) //clicks search again
            .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
    },
    'Search by zip': browser => {
        browser
            .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
            .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
            .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
        functions.enterValue(selectors.enterLocation.searchBox, data.zipSearch.searchString, browser) //enters the search string
        browser
            .click(selectors.enterLocation.submitButton) //clicks the search button
            .waitForElementVisible(selectors.currentWeather.currentTemp, 2000) //waits for the next screen to load by waiting for the current temperature
            .verify.containsText(selectors.currentWeather.title, data.globals.title) //is the title on this screen right?
            .verify.containsText(selectors.currentWeather.location, data.zipSearch.cityResult) //is the result city correct?
            .verify.elementPresent(selectors.currentWeather.icon) //without a LOT more logic, we can't test the icon being displayed, just that it is present.
            // .verify.containsText(selectors.currentWeather.currentTemp, data.citySearch.currentTemp)
            // you'd use that style verify if you are using plain text as data for the results.  RegEx goes a little differently.
            .expect.element(selectors.currentWeather.currentTemp).text.to.match(data.zipSearch.currentTemp) //is the current temp in the right format?
        // using an .expect instead of a .verify or .assert ends the browser chain.  Plus, where .verify will continue
        // tests after a failure, just about anything else off of the browser will stop on a failure.
        // So, we need to restart the browser chain after each .expect, AND be aware that it could end our test.
        browser.expect.element(selectors.currentWeather.maxTemp).text.to.match(data.zipSearch.maxTemp) //is the max temp in the right format?
        browser.expect.element(selectors.currentWeather.minTemp).text.to.match(data.zipSearch.minTemp) //is the min temp in the right format?
        browser.expect.element(selectors.currentWeather.wind).text.to.match(data.zipSearch.wind) //is the wind in the right format?
        browser.expect.element(selectors.currentWeather.humidity).text.to.match(data.zipSearch.humidity) //is the humidity in the right format?
        browser
            .verify.containsText(selectors.currentWeather.searchAgainButton, data.zipSearch.buttonText) //is the button text as expected?
            .click(selectors.currentWeather.searchAgainButton) //clicks search again
            .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
    },
    'Invalid searches get an error screen': browser => {
        browser
            .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
            .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
            .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
        functions.enterValue(selectors.enterLocation.searchBox, data.errorScreen.searchString, browser) //enters the search string
        browser
            .click(selectors.enterLocation.submitButton) //clicks the search button
            .waitForElementVisible(selectors.errorMessage.errorMessage, 2000) //waits for the next screen to load by waiting for the current temperature
            .verify.containsText(selectors.errorMessage.title, data.globals.title) //is the title right on the new screen?
            .verify.containsText(selectors.errorMessage.errorMessage, data.errorScreen.errorMessage) //is the error message right?
            .verify.containsText(selectors.errorMessage.tryAgainButton, data.errorScreen.buttonText) //does the button have the right text?
            .click(selectors.errorMessage.tryAgainButton)
            .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
    }
}