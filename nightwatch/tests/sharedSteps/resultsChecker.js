let resultsRegex = require('../../testData/resultsRegex.js')

module.exports = (client, city) => {
    var results = client.page.resultsPage();
    results.waitForElementVisible('@resultsLocation'); //wait for the page to load
    results.assert.containsText('@resultsLocation', city); //make sure the results are for the proper location
    results.assert.elementPresent('@resultsIcon'); //the icon should be present

    //expect text.to.match checks the text against the supplied regex, just like RegExp.test(str), true if it finds a match
    results.expect.element('@resultsTemperature').text.to.match(resultsRegex.temperature); //regex match the temp format
    results.expect.element('@resultsMaxTemp').text.to.match(resultsRegex.maxTemp); //regex match the temp format
    results.expect.element('@resultsMinTemp').text.to.match(resultsRegex.minTemp); //regex match the temp format
    results.expect.element('@resultsWindSpeed').text.to.match(resultsRegex.windSpeed); //regex match the wind speed format
    results.expect.element('@resultsHumidity').text.to.match(resultsRegex.humidity); //regex match the humidity format
}