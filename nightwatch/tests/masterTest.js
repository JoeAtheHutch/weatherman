let searchValues = require('../testData/searchValues.js');

let enterSearch = require('./sharedSteps/enterSearch.js'),
    resultsChecker = require('./sharedSteps/resultsChecker.js'),
    resetSearch = require('./sharedSteps/resetSearch.js'),
    errorHandler = require('./sharedSteps/errorHandler.js');

module.exports = {
    before : client => client.page.homePage().navigate(),
    'Searches by City' : client => enterSearch(client, searchValues.searchByCity.city),
    'Loads the results from City search' : client => resultsChecker(client, searchValues.searchByCity.city),
    'Resets for the zip search' : client => resetSearch(client),
    'Searches by Zip' : client => enterSearch(client, searchValues.searchByZip.zip),
    'Loads the results from Zip search' : client => resultsChecker(client, searchValues.searchByZip.city),
    'Resets for empty search' : client => resetSearch(client),
    'Searches with an empty string' : client => enterSearch(client, searchValues.emptySearch.city),
    'Displays error message' : client => errorHandler(client, searchValues.emptySearch.message),
    'And will search again' : client => enterSearch(client, searchValues.searchByCity.city),
    after : client => client.end()
}