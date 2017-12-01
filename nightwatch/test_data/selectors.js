module.exports = {
    enterLocation: {
        title: `h1[class='app__title']`,
        searchBox: `input[class='enter-location__input']`,
        submitButton: `button[class='enter-location__submit']`
    },
    currentWeather: {
        title: `h1[class='app__title']`,
        location: `h3[class='current-weather__location']`,
        icon: `img[class='current-weather__icon']`,
        currentTemp: `h3[class='current-weather__temp']`,
        maxTemp: `li[name='maxTemp']`,
        minTemp: `li[name='minTemp']`,
        wind: `li[name='wind']`,
        humidity: `li[name='humidity']`,
        searchAgainButton: `button[class='current-weather__search-again']`
    },
    errorMessage: {
        title: `h1[class='app__title']`,
        errorMessage: `h3[class='error-message__message']`,
        tryAgainButton: `button[class='error-message__try-again']`
    }
}