module.exports = {
    globals: {
        url: `http://localhost:3000`,
        title: `WEATHERMAN`,
        placeholderText: `London / 84601`, 
        searchButton: `Submit`       
    },
    citySearch: {
        searchString: `Onalaska`,
        cityResult: `Onalaska`,
        currentTemp: /\-?\d+\.\d+°/g,
        maxTemp: /Max: \-?\d+\.\d+°/g,
        minTemp: /Min: \-?\d+\.\d+°/,
        wind: /Wind: ?\d+\.\d+ MPH/g,
        humidity: /Humidity: \d{1,2}%/g,
        buttonText: `Search Again`
    },
    zipSearch: {
        searchString: `02134`,
        title: `Weatherman`,
        placeholderText: `London / 84601`,
        cityResult: `Allston`,
        currentTemp: /\-?\d+\.\d+°/g,
        maxTemp: /Max: \-?\d+\.\d+°/g,
        minTemp: /Min: \-?\d+\.\d+°/,
        wind: /Wind: ?\d+\.\d+ MPH/g,
        humidity: /Humidity: \d{1,2}%/g,
        buttonText: `Search Again`
    },
    errorScreen: {
        searchString: ``,
        errorMessage: `There was a problem fetching the weather!`,
        buttonText: `Try again?`
    }
}