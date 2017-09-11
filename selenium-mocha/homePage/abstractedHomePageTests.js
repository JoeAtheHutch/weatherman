var homePage = require('./homePageValues');
var commonFunctions = require('../commonFunctions')

var test = require('selenium-webdriver/testing');
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;
var expect = require('chai').expect;

var driver = new webdriver.Builder()
    .withCapabilities({
        'browserName': 'chrome'
    })
    .build();

describe('Simple Abstraction: The homepage', function () {
    before(function (done) {
        driver.get('localhost:3000').then(done);
    })

    after(function () {
        return driver.quit();
    })
    describe('is complete', function () {
        it('has a title', function (done) {
            driver.getTitle().then(function (title) {
                expect(title).equals(homePage.title.value);
            })
                .then(done)
        })
        it('loaded the app', function (done) {
            commonFunctions.exists(driver, homePage.app.selector, done);
        })
        it('has a title bar with the right value', function (done) {
            commonFunctions.hasValue(driver, homePage.titleBar.selector, homePage.titleBar.value, done);
        })
        it('has the input field', function (done) {
            commonFunctions.isVisible(driver, homePage.inputField.selector, done);
        })
        it('has the submit button', function (done) {
            commonFunctions.isVisible(driver, homePage.submitButton.selector, done);
        })
    })
    describe('input field', function () {
        beforeEach(function (done) {
            driver.get('localhost:3000').then(done)
        })
        it('allows numeric input', function (done) {
            commonFunctions.input(driver, homePage.inputField.selector, 'ABCD', done);
        })
        it('allows character input', function (done) {
            commonFunctions.input(driver, homePage.inputField.selector, '1234', done);
        })
        it('allows , + " + \' punctuation also', function (done) {
            commonFunctions.input(driver, homePage.inputField.selector, ', " \'', done);
        })
    })
});
