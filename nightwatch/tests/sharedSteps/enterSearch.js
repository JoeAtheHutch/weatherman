var editField = require('../../sharedFunctions/editField.js');
module.exports = (client, location) => {
        var home = client.page.homePage();
        editField(home, '@locationInput', location);
        home.click('@locationSubmit')
            .waitForElementNotPresent('@locationSubmit')
            .assert.elementNotPresent('@locationSubmit')
            .assert.visible('@loadingHourglass');
}