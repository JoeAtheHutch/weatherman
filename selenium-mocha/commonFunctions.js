var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var expect = require('chai').expect;

var findElement = function (driver, selector) {
        return driver.findElement(By.css(selector))
    } 

module.exports = {
    findElement: findElement,
    hasValue: function (driver, selector, value, callback) {
        findElement(driver, selector).getText().then(function (result) {
            expect(result).equals(value);
        }).then(callback);
    },
    exists: function (driver, selector, callback) {
        findElement(driver, selector).then(function(exists){
            expect(exists).not.to.equals(null||undefined)
        }).then(callback);
    },
    isVisible: function (driver, selector, callback) {
        findElement(driver, selector).isDisplayed().then(function (visibility) {
            expect(visibility).equals(true)
        }).then(callback);
    },
    input: function (driver, selector, input, callback) {
        var element = findElement(driver, selector);
        element.sendKeys(input).then(
            element.getAttribute("value").then(function(value){
                expect(value).equals(input)
            })
        ).then(callback);
    }
}