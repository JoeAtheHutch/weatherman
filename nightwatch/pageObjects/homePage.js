module.exports = {
    url: 'localhost:3000',
    elements: {
        titleBar : {
            selector: 'h1[class=app__title]'
        },
        locationInput : {
            selector: 'input[class=enter-location__input]'
        },
        locationSubmit : {
            selector: 'button[class=enter-location__submit]'
        },
        loadingHourglass : {
            selector: 'img[alt="loading indicator"]'
        }
    }
}