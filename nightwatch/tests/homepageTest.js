module.exports = {
    before: (browser) => {
        browser.url('localhost:3000');
    },
    'Elements are present': (browser) => {
        browser
            .verify.title('Weatherman')
            .verify.containsText('h1.app__title', 'WEATHERMAN')
            .verify.visible('input.enter-location__input')
            .verify.attributeContains('input.enter-location__input', 'placeholder', 'London / 84601')
            .verify.visible('button.enter-location__submit')
            .verify.containsText('button.enter-location__submit', 'Submit');
    },
    'Inputs are accepted': (browser) => {
        browser
            .clearValue('input.enter-location__input')
            .setValue('input.enter-location__input', 'ABCdef')
            .verify.value('input.enter-location__input', 'ABCdef')
            .clearValue('input.enter-location__input')
            .setValue('input.enter-location__input', '123456')
            .verify.value('input.enter-location__input', '123456')
            .clearValue('input.enter-location__input')
            .setValue('input.enter-location__input', ',./\\\'"')
            .verify.value('input.enter-location__input', ',./\\\'"')
            .clearValue('input.enter-location__input')
    },
    after: (browser) => {
        browser.end();
    }
}

// assert works fine as well, but will kill the curent testing session if the assertion is wrong.  Verify will just report it at the end.