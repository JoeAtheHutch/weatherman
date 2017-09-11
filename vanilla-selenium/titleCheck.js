var webdriver = require('selenium-webdriver');

var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

browser.get('localhost:3000');
browser.findElement(webdriver.By.css('h1.app__title')).then(function(title){
    title.getText().then(function(text){
        console.log('The titlebar text is: ', text);
        browser.quit();
    });
});


//selenium webdriver by itself is powerful for browser interaction, but doesn't have any assertions/expects built in.