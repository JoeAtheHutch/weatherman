let resourcePath = '/Users/ajlarson/src/testing-resources/selenium-resources/'

module.exports = {
    "src_folders": ["nightwatch/tests"],
    "output_folder": "nightwatch/reports",
    "custom_commands_path": "nightwatch/sharedFunctions",
    "custom_assertions_path": "",
    "page_objects_path": "nightwatch/pageObjects",
    "globals_path": "nightwatch/globals.js",

    "selenium": {
        "start_process": true,
        "server_path": resourcePath + "selenium-server-standalone-3.5.0.jar",
        "log_path": "",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": resourcePath + "chromedriver",
            "webdriver.gecko.driver": resourcePath + "geckodriver",
            "webdriver.edge.driver": ""
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
        },

        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "marionette": true
            }
        },

        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge"
            }
        }
    }

}