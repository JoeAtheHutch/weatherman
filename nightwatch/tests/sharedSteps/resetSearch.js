module.exports = client => {
    let resultsPage = client.page.resultsPage();
    let homePage = client.page.homePage();
    resultsPage.assert.visible('@searchAgainButton')
        .click('@searchAgainButton')
        .waitForElementNotPresent('@searchAgainButton');
    homePage.waitForElementVisible('@titleBar')
        .assert.visible('@locationSubmit');

}