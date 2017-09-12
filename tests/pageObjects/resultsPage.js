module.exports = {
    elements: {
        titleBar : {
            selector : 'h1[class=app__title]'
        },
        resultsCard : {
            selector : 'div[class=current-weather]'
        },
        resultsContainer : {
            selector : 'div[class=current-weather__weather]'
        },
        resultsLocation : {
            selector : 'h3[class=current-weather__location]'
        },
        resultsIcon : {
            selector : 'img[class=current-weather__icon]'
        },
        resultsTemperature : {
            selector : 'h3[class=current-weather__temp]'
        },
        resultsMaxTemp : {
            selector : '//*[@id="root"]/div/div/div/ul/li[1]',
            locateStrategy: xpath
        },
        resultsMinTemp : {
            selector : '//*[@id="root"]/div/div/div/ul/li[2]',
            locateStrategy: xpath
        },
        resultsWindSpeed : {
            selector : '//*[@id="root"]/div/div/div/ul/li[3]',
            locateStrategy: xpath
        },
        resultsHumidity : {
            selector : '//*[@id="root"]/div/div/div/ul/li[4]',
            locateStrategy: xpath
        },
        searchAgainButton : {
            selector : 'button[class=current-weather__search-again]'
        }
    }
}