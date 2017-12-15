module.exports = {
    fields: {
        cityZip: 'input[class="enter-location__input"]',
        locationTitle: 'h3[class="current-weather__location"]'
    }, 
    buttons: {
        submit: 'button[class="enter-location__submit"]',
        tryAgain: 'button[class="error-message__try-again"]',
        searchAgain: 'button[class="current-weather__search-again"]'
    },
    messages: {
        error: 'h3[class="error-message__message"]',
        title: 'h1[class="app__title"]'
    },
    currentWeather: {
        temp: 'h3[name="temp"]',
        maxTemp: 'h3[name="maxTemp"]',
        minTemp: 'h3[name="minTemp"]',
        wind: 'h3[name="wind"]',
        humidity: 'h3[name="humidity"]'

    }
}