var homePage = require('./homePageValues');

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

describe('Vanilla Selenium/Mocha: The homepage', function () {
    before(function (done) {
        driver.get('localhost:3000').then(done);
    })

    after(function () {
        return driver.quit();
    })
    describe('is complete', function () {
        it('has a title', function (done) {
            driver.getTitle().then(function (title) {
                expect(title).equals('Weatherman');
            })
                .then(done)
        })
        it('loaded the app', function (done) {
            driver.findElement(By.css('div#root')).then(function (app) {
                app.isDisplayed().then(function (result) {
                    assert(result, true)
                })
            })
                .then(done)
        })
        it('has a title bar with the right value', function (done) {
            driver.findElement(By.css('h1.app__title')).then(function (titleBar) {
                titleBar.getText().then(function (title) {
                    expect(title).equals('WEATHERMAN');
                })
            })
                .then(done)
        })
        it('has the input field', function (done) {
            driver.findElement(By.css('input.enter-location__input')).then(function (inputField) {
                inputField.isDisplayed().then(function (result) {
                    expect(result).equals(true)
                })
            })
                .then(done)
        })
        it('has the submit button', function (done) {
            driver.findElement(By.css('button.enter-location__submit')).then(function (submitButton) {
                submitButton.isDisplayed().then(function (result) {
                    expect(result).equals(true)
                })
            })
                .then(done)
        })
    })
    describe('input field', function () {
        beforeEach(function (done) {
            driver.get('localhost:3000').then(done)
        })
        it('allows numeric input', function (done) {
            driver.findElement(By.css('input.enter-location__input')).then(function(inputField){
                inputField.sendKeys('12345').then(function(){
                    inputField.getAttribute('value').then(function(value){
                        expect(value).equals('12345');
                    })
                })
            })
            .then(done)
        })
        it('allows character input', function (done) {
            driver.findElement(By.css('input.enter-location__input')).then(function(inputField){
                inputField.sendKeys('ABCD').then(function(){
                    inputField.getAttribute('value').then(function(value){
                        expect(value).equals('ABCD');
                    })
                })
            })
            .then(done)
        })
        it('allows , + " + \' punctuation also', function (done) {
            driver.findElement(By.css('input.enter-location__input')).then(function(inputField){
                inputField.sendKeys(', " \'').then(function(){
                    inputField.getAttribute('value').then(function(value){
                        expect(value).equals(', " \'');
                    })
                })
            })
            .then(done)
        })
    })
});
