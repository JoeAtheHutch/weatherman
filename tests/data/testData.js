module.exports = {
    goodData: {
        cityNames: {
            saltlake: {
                input: 'Salt Lake',
                output: 'Salt Lake City'
            },
            sacramento: {
                input: 'Sacramento',
                output: 'Sacramento'
            }
        },
        cityAndState: {

        },
        zipCode: {

        }
    },
    badData: {
        blankString: {
            input: '',
            output: 'There was a problem fetching the weather!'
        },
        zipCodes: {
            short: {
                input: '123',
                output: 'There was a problem fetching the weather!'
            },
            long: {
                input:'987654321',
                output: 'There was a problem fetching the weather!'
            }
        }
    }
}
