var assert = require('assert');

describe('The weatherman home page', function() {
    describe('has everything in the UI', function() {
        before(function(){
            browser.url('http://localhost:3000');
        })
        after(function(){
            // browser.end(); -- the testrunner will close it for you
        })
        it('and loaded the app', function(){
            assert.ok(browser.isVisible('div#root'));
        })
        it('including a tile bar', function () {
            assert.equal(browser.getText('h1.app__title'), 'WEATHERMAN');
        })
        it('including an input field', function() {
            assert.ok(browser.isVisible('input.enter-location__input'))
        })
        it('including a submit button', function(){
            assert.ok(browser.isVisible('button.enter-location__submit'))
        })
    })
    describe('has a manipulatable UI that', function() {
        beforeEach(function(){
            browser.url('http://localhost:3000');
            browser.clearElement('input.enter-location__input');
        })
        it('allows numeric input', function(){
            var input = 'input.enter-location__input';
            browser.addValue(input, '1234567890');
            assert.equal(browser.getValue(input), '1234567890');
        })
        it('allows alphacharacter input', function(){
            var input = 'input.enter-location__input';
            browser.addValue(input, 'abcdefGHI');
            assert.equal(browser.getValue(input), 'abcdefGHI');
        })
        it('allows punctuation input (, " \')', function(){
            var input = 'input.enter-location__input';
            browser.addValue(input, ', " \'');
            assert.equal(browser.getValue(input), ', " \'');
        })
        it('lets you submit by pressing enter in the field', function(){
            browser.addValue('input.enter-location__input', '\uE007');
            assert.ok(!browser.isVisible('input.enter-location__input'));
        })
        it('lets you click on the button, taking you somewhere new', function(){
            browser.click('button.enter-location__submit');
            assert.ok(!browser.isVisible('button.enter-location__submit'));
        })
    })
})