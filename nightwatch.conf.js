const resourcePath = '/Users/ajlarson/src/testing-resources/selenium-resources/'

module.exports = {
    "src_folders" : "test",

    "selenium": {
        "start_process": true,
        "server_path": resourcePath + "selenium-server-standalone-3.5.0.jar",
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": resourcePath + "chromedriver"
                }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }

}