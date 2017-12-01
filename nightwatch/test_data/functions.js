module.exports = {
    //This function simplifies our efforts to input data into any fields in our browser.
    //It will clear out any existing data in the field, input data, and verify it input correctly.
    //The selector should be a CSS selector for the field, the input is a string to input, and
    //the browser parameter is for the nightwatchjs browser object.
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    }
}