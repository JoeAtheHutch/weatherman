module.exports = {
    global: {
        title: 'WEATHERMAN',
        searchPlaceholder: `London / 84119`,
        buttonText: 'Submit',
    },
    citySearch: {
        onalaska: {
            searchString: `Onalaska`,
            currentTemp: /\-?\d+\.\d+°/g,
            maxTemp: /Max: \-?\d+\.\d+°/g,
            minTemp: /Min: \-?\d+\.\d+°/,
            wind: /Wind: ?\d+\.\d+ MPH/g,
            humidity: /Humidity: \d{1,2}%/g,
            buttonText: `Search Again`,
            location: `Onalaska`
        },
        saltLakeCity: {
            searchString: `Salt Lake City`,
            currentTemp: /\-?\d+\.\d+°/g,
            maxTemp: /Max: \-?\d+\.\d+°/g,
            minTemp: /Min: \-?\d+\.\d+°/,
            wind: /Wind: ?\d+\.\d+ MPH/g,
            humidity: /Humidity: \d{1,2}%/g,
            buttonText: `Search Again`,
            location: `Salt Lake City`
        },
        tokyo: {
            searchString: `Tokyo`,
            currentTemp: /\-?\d+\.\d+°/g,
            maxTemp: /Max: \-?\d+\.\d+°/g,
            minTemp: /Min: \-?\d+\.\d+°/,
            wind: /Wind: ?\d+\.\d+ MPH/g,
            humidity: /Humidity: \d{1,2}%/g,
            buttonText: `Search Again`,
            location: `Tokyo`
        },
    },
    zipSearch: {
        westValley: {
            searchString: `84119`,
            currentTemp: /\-?\d+\.\d+°/g,
            maxTemp: /Max: \-?\d+\.\d+°/g,
            minTemp: /Min: \-?\d+\.\d+°/,
            wind: /Wind: ?\d+\.\d+ MPH/g,
            humidity: /Humidity: \d{1,2}%/g,
            buttonText: `Search Again`,
            location: `West Valley City`
        },
        saltLakeCity: {
            searchString: `84104`,
            currentTemp: /\-?\d+\.\d+°/g,
            maxTemp: /Max: \-?\d+\.\d+°/g,
            minTemp: /Min: \-?\d+\.\d+°/,
            wind: /Wind: ?\d+\.\d+ MPH/g,
            humidity: /Humidity: \d{1,2}%/g,
            buttonText: `Search Again`,
            location: `Salt Lake City`
        },
        beverlyHills: {
            searchString: `90210`,
            currentTemp: /\-?\d+\.\d+°/g,
            maxTemp: /Max: \-?\d+\.\d+°/g,
            minTemp: /Min: \-?\d+\.\d+°/,
            wind: /Wind: ?\d+\.\d+ MPH/g,
            humidity: /Humidity: \d{1,2}%/g,
            buttonText: `Search Again`,
            location: `Beverly Hills`
        }
    },
    errorScreen: {
        searchText: '123ad',
        message: 'There was a problem fetching the weather!',
        buttonText: 'Try again?'
    }
}