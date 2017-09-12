module.exports = (client, message) => {
        let errorPage = client.page.errorPage();
        let homePage = client.page.homePage();
        errorPage
            .waitForElementVisible('@errorMessage');
        errorPage
            .expect.element('@errorMessage').text.to.equal(message);
        errorPage
            .assert.elementPresent('@tryAgainButton')
            .click('@tryAgainButton')
            .waitForElementNotPresent('@tryAgainButton');
        homePage
            .waitForElementVisible('@locationInput');
}