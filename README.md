<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

<img src="https://raw.githubusercontent.com/DevMountain/weatherman/master/readme-assets/solution.PNG"/>

In this project we'll be building a weather app that allows users to search for the current weather anywhere in the world. We'll make use of the [OpenWeatherMap](https://openweathermap.org/) API and [Redux Promise Middleware](https://github.com/pburtchaell/redux-promise-middleware) to accomplish this in a user friendly fashion.

## Setup

* Go to <a href="https://home.openweathermap.org/users/sign_up">OpenWeatherMap</a> and create an account. You'll need an API key to complete this project. 
  * The API key can take up to 10 minutes to activate.
* `Fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm i` to install dependencies.
* Run `npm start` to spin up the development server.

## Step 1

### Summary

In this step, we will create a file that contains and exports our API Key from `OpenWeatherMap`.  The app won't actually run until you've done this step.

### Instructions

* Create a new file in `src` named `apiKey.js`.
* In `src/apiKey.js` export default your API Key in a string.
  * You can locate your API Key <a href="https://home.openweathermap.org/api_keys">here</a> after you've signed up and logged in.

### Solution

<details>

<summary> <code> src/apiKey.js </code> </summary>

```js
export default "API_KEY_HERE";
```

</details>

## Step 2

### Summary
Now it's time to get started actually running automation.

### Instructions
* Create `nightwatch.conf.js` and `nightwatchProps.js` to configure Nightwatch.
* Feel free to copy them from another repo!
* Set up your testing skeleton/framework
* Gather selectors and test data
* Convert your tests in JIRA into automated tests!

<details>

<summary> Detailed Instruction </summary>

<br />

* Create the `nightwatch` folder in the base directory of your repository.
* Inside `nightwatch` create two folders, one `tests`, and another `test_data`.

weatherman
|
`-- nightwatch
  |-- tests
  `-- test_data

* In your `test_data` folder you can create files for your test data, selectors and helper functions.  You'll create files for your tests in the `tests` folder.

Remember in each of your files for test data to export the info:

```js
module.exports = {

}
```

And to require the info in your tests:

```js
const selectors = require('../test_data/selectors')
```

Otherwise, have at it!  Ask if you have questions.

</details>

### Solution

<details>

<summary> <code> File Structure </code> </summary>

weatherman
|
|-- nightwatch
|  |-- tests
|  |   `-- test.js
|  `-- test_data
|      |-- data.js
|      |-- functions.js
|      `-- selectors.js
|-- node_modules
|-- public
|-- readme-assets
|-- src
|-- .gitignore
|-- nightwatch.conf.js
|-- nightwatchProps.js
|-- package.json
|-- README.md
`-- yarn.lock

</details>

<details>

<summary> <code> test.js </code> </summary>

<br />

```js
const data = require('../test_data/data.js')
const data = require('../test_data/functions')
const selectors = require('../test_data/css_selectors')

module.exports = {

}
```

</details>

<details>

<summary> <code> data.js functions.js selectors.js </code> </summary>

<br />

```js
module.exports = {

}
```

</details>

## Step 3

### Summary
This and the following steps are available to give you a little more of a guided walkthrough to creating automation tests for the Weatherman application.  We'll get started with a function you're familiar with -- we know this will help us.  There may be other functions that prove useful, but I'll leave it to just this one for now.

### Instructions
* Now that you've got your file tree together, I'd implement the `enterValue()` function we created yesterday to enter your zip and city values in the search box.  It should be placed in your `test_functions` file.

<details>

<summary> Detailed Instructions </summary>

<br />

You can implement `enterValue()` by rewriting it, if you recall it utilized the `browser` property functions `clearValue()`, `setValue()`, and `verify.value()`.  You can also copy it from the snippet below.

```js
enterValue : (selector, input, browser) => {
  browser
      .clearValue(selector)
      .setValue(selector, input)
      .verify.value(selector, input)
}
```

Don't forget to add comments explaining the purpose of the function!

```js
// your comments here
enterValue : (selector, input, browser) => {
```

</details>

### Solution

<details>

<summary> <code> functions.js </code> </summary>

<br />

```js
module.exports = {
    //This function simplifies our efforts to input data into any fields in our browser.
    //It will clear out any existing data in the field, input data, and verify it input correctly.
    //The selector should be a CSS selector for the field, the input is a string to input, and
    //the browser parameter is for the nightwatchjs browser object.
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    }
}
```

</details>

## Step 4

### Summary
Now we'll need to grab ourselves some selectors.

### Instructions
* Run the app using `npm start` and open your Inspector tool in Chrome
* Make sure to organize your selectors so you'll be able to readily remember whare things are when you need to use them
* Note: This is a simple app, any number of organizational schemes could work.

<details>

<summary> Detailed Instructions </summary>
<br />

Don't forget the format of the selector - the tag or element name first, then in square brackets an attribute and its value if needed.

For example:

```html
<input type=text name="cityZip" />
```

Could be captured as:

```js
"input[type='text']"
```

or

```js
"input[class='enter-location__input']"
```

Track your selectors as properties of the exported object in `selectors.js`.  Personally, I like sorting selectors by page, and then if there are a LOT I need on a page I'll sort more by type.  There are only a few here, I'll sort them only by page.

```js
module.exports = {
    enterLocation: {
        title: `h1[class='app__title']`,
        searchBox: `input[class='enter-location__input']`,
        submitButton: `button[class='enter-location__submit']`
    },
    currentWeather: {
      ///.........enterLocation, currentWeather and errorMessage are the three pages I'll track - they match the three components of the web application.
```

You might notice when looking through the application, that there aren't specific ids, names, or classes in the `current-weather__stats` list - where Max & Min temps are, as well as humidity and wind.  We could just grab the selector for the whole list, `ul[class='current-weather__stats']` and check that it contains all the bits we expect.  That would work, we'd just use something like:

```js
browser
  .assert.containsText('ul[class="current-weather__stats"]', 'Max Temp: 39.2°')
  .assert.containsText('ul[class="current-weather__stats"]', 'Min Temp: 31.6°)
  //etc....
```

That would work.  I'm going to go one step further, however, and ADD some specific selectors to each element.  You can find the correct file to edit at `weatherman/src/components/CurrentWeather/CurrentWeather.js`.  The list of weather items looks like this:

```js
<ul className="current-weather__stats">
  <li className="current-weather__stat">Max: { maxTemperature }°</li>
  <li className="current-weather__stat">Min: { minTemperature }°</li>
  <li className="current-weather__stat">Wind: { wind } MPH</li>
  <li className="current-weather__stat">Humidity: { humidity }%</li>
</ul>
```

I'll add in a `name` attribute, with a unique name for each list item.  Something like

```js
<li className="current-weather__stat" name="maxTemp">Max: { maxTemperature }°</li>
```

Then I can add those specific selectors to my selectors file.

</details>

### Solution

<details>

<summary> <code> selectors.js </code> </summary>

<br />

```js
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
```

</details>

<details>

<summary> <code> CurrentWeather.js </code> </summary>

<br />

```js
import React, { PropTypes } from "react";

import "./CurrentWeather.css";

export default function CurrentWeather( { weather, reset } ) {
	const {
		  currentTemperature
		, humidity
		, icon
		, location
		, maxTemperature
		, minTemperature
		, wind
	} = weather;

	return (
		<div className="current-weather">
			<div className="current-weather__weather">
				<h3 className="current-weather__location">{ location }</h3>
				<img
					alt="sunny"
					className="current-weather__icon"
					src={ icon }
				/>
				<h3 className="current-weather__temp">{ currentTemperature }°</h3>

				<div className="current-weather__separator" />

				<ul className="current-weather__stats">
					<li className="current-weather__stat" name="maxTemp">Max: { maxTemperature }°</li>
					<li className="current-weather__stat" name="minTemp">Min: { minTemperature }°</li>
					<li className="current-weather__stat" name="wind">Wind: { wind } MPH</li>
					<li className="current-weather__stat" name="humidity">Humidity: { humidity }%</li>
				</ul>
			</div>
			<button
				className="current-weather__search-again"
				onClick={ reset }
			>
				Search Again
			</button>
		</div>
	);
}

CurrentWeather.propTypes = {
	  reset: PropTypes.func.isRequired
	, weather: PropTypes.shape( {
		  icon: PropTypes.string.isRequired
		, currentTemperature: PropTypes.number.isRequired
		, maxTemperature: PropTypes.number.isRequired
		, minTemperature: PropTypes.number.isRequired
		, wind: PropTypes.number.isRequired
		, humidity: PropTypes.number.isRequired
	} ).isRequired
};
```

</details>

## Step 5

### Summary
Now that we have our selectors ironed out, the next step is to gather together test data.

### Instructions
There are three things we're wanting to test... A search by Zip, a search by City, and a search generating an error message.  To support these we'll need:
* Input and expected output for each
* The city and zip searches will generate one type of results, and the error message another, so it'd make sense to have one format for each type of results.
* I'll group the test data together by transaction - this'll make it simpler to add more tests.
* All of these changes will go in the `data.js` file

<details>

<summary> Detailed Instructions </summary>

<br />

We'll be making four data sets, organizing them by one global set, and then one for each transaction.  Global will have the strings that will be the same between each and every test.  Otherwise, it'll be transaction based.

```js
global: {

},
citySearch: {

},
zipSearch: {

},
errorScreen: {

}
```

For each of these, we'll fill out the inputs, and any output we expect on the screen.  The only real input in these cases is the city, zip, and to generate an error, no input at all!  Output will be all the text we expect to be on the screen.  Here's the `citySearch` data as a hint...

```js
citySearch: {
  searchString: `Onalaska`,
  currentTemp: /\-?\d+\.\d+°/g,
  maxTemp: /Max: \-?\d+\.\d+°/g,
  minTemp: /Min: \-?\d+\.\d+°/,
  wind: /Wind: ?\d+\.\d+ MPH/g,
  humidity: /Humidity: \d{1,2}%/g,
  buttonText: `Search Again`
}
```

If that looked strange to you - it's probably because you haven't seen a *Regular Expression* before!  Don't worry - it's not something you have to pick up...  When you aren't certain about the contents of a message, but you know the format, it can verify whether the format matches or not though!  https://www.regextester.com/ is a great resource for learning and testing regular expressions if you're interested.

Here's a good option without regular expressions...

```js
citySearch: {
  searchString: `Onalaska`,
  currentTemp: `°`,
  maxTemp: `Max: `,
  minTemp: `Min: `,
  wind: `Wind: `,
  humidity: `Humidity: `,
  buttonText: `Search Again`
}
```

Now go and complete the data for the other two transactions...

</details>

### Solution

<details>

<summary> <code> data.js </code> </summary>

<br />

```js
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
```

## Step 6

### Summary
We have the functions, selectors and data that we need.  Now we're ready to actually write our tests!

### Instructions
We've got tests to write.  Three of them.  Base the tests off of your own JIRA tests you wrote to cover the requirements.  As for me, you'll be able to infer the test preconditions, postconditions and procedures from what the automation is doing.

* Check that all expected data is present on the splash screen.
* Input the required search string in the search box.
* Click the search button.
* Check for appropriate results.
* Click the search again or try again button.

That's really nutshelled, but you'll see it in the actual tests.

<details>

<summary> Detailed Instructions </summary>

<br />

Just like all tests in Nightwatch, they are `key` : `value` pairs, where the key is a string (the name of the test, generally a brief synopsis of what's needed), and the value is a function we're passing the `browser` object to, where we actually test the things.

```js
`Search by city name` : browser => {

}
```

We'll have the three, for the city, zip and error tests.  But before that, we can use the before/after/beforeEach/afterEach or whatever we want.

```js
before: browser => {
  browser.url(data.url)
},
after: browser => {
  browser.end()
}
```

The test will check that EVERYTHING the user might interact with (read, click, etc) is present and correct.  I've included a heavily commented test for the city name search here...

```js
'Search by city name' : browser => {
  browser
      .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
      .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
      .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
  functions.enterValue(selectors.enterLocation.searchBox, data.citySearch.searchString, browser) //enters the search string
  browser
      .click(selectors.enterLocation.submitButton) //clicks the search button
      .waitForElementVisible(selectors.currentWeather.currentTemp, 2000) //waits for the next screen to load by waiting for the current temperature
      .verify.containsText(selectors.currentWeather.title, data.globals.title) //is the title on this screen right?
      .verify.containsText(selectors.currentWeather.location, data.citySearch.cityResult) //is the result city correct?
      .verify.elementPresent(selectors.currentWeather.icon) //without a LOT more logic, we can't test the icon being displayed, just that it is present.
      // .verify.containsText(selectors.currentWeather.currentTemp, data.citySearch.currentTemp)
      // you'd use that style verify if you are using plain text as data for the results.  RegEx goes a little differently.
      .expect.element(selectors.currentWeather.currentTemp).text.to.match(data.citySearch.currentTemp) //is the current temp in the right format?
      // using an .expect instead of a .verify or .assert ends the browser chain.  Plus, where .verify will continue
      // tests after a failure, just about anything else off of the browser will stop on a failure.
      // So, we need to restart the browser chain after each .expect, AND be aware that it could end our test.
  browser.expect.element(selectors.currentWeather.maxTemp).text.to.match(data.citySearch.maxTemp) //is the max temp in the right format?
  browser.expect.element(selectors.currentWeather.minTemp).text.to.match(data.citySearch.minTemp) //is the min temp in the right format?
  browser.expect.element(selectors.currentWeather.wind).text.to.match(data.citySearch.wind) //is the wind in the right format?
  browser.expect.element(selectors.currentWeather.humidity).text.to.match(data.citySearch.humidity) //is the humidity in the right format?
  browser
      .verify.containsText(selectors.currentWeather.searchAgainButton, data.citySearch.buttonText) //is the button text as expected?
      .click(selectors.currentWeather.searchAgainButton) //clicks search again
      .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
}
```

Your other tests will run much the same.  Remember if you are unclear on what commands to use to do something with the webpage, look in http://www.nightwatchjs.org/api, or if all else fails, google it!

</details>

### Solution

<details>

<summary> <code> test.js </code> </summary>

<br />

```js
const data = require('../test_data/data')
const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')

module.exports = {
    before: browser => {
        browser.url(data.globals.url) //loads the page initially
    },
    after: browser => {
        browser.end() //closes the browser when tests are complete
    },
    'Search by city name': browser => {
        browser
            .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
            .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
            .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
        functions.enterValue(selectors.enterLocation.searchBox, data.citySearch.searchString, browser) //enters the search string
        browser
            .click(selectors.enterLocation.submitButton) //clicks the search button
            .waitForElementVisible(selectors.currentWeather.currentTemp, 2000) //waits for the next screen to load by waiting for the current temperature
            .verify.containsText(selectors.currentWeather.title, data.globals.title) //is the title on this screen right?
            .verify.containsText(selectors.currentWeather.location, data.citySearch.cityResult) //is the result city correct?
            .verify.elementPresent(selectors.currentWeather.icon) //without a LOT more logic, we can't test the icon being displayed, just that it is present.
            // .verify.containsText(selectors.currentWeather.currentTemp, data.citySearch.currentTemp)
            // you'd use that style verify if you are using plain text as data for the results.  RegEx goes a little differently.
            .expect.element(selectors.currentWeather.currentTemp).text.to.match(data.citySearch.currentTemp) //is the current temp in the right format?
        // using an .expect instead of a .verify or .assert ends the browser chain.  Plus, where .verify will continue
        // tests after a failure, just about anything else off of the browser will stop on a failure.
        // So, we need to restart the browser chain after each .expect, AND be aware that it could end our test.
        browser.expect.element(selectors.currentWeather.maxTemp).text.to.match(data.citySearch.maxTemp) //is the max temp in the right format?
        browser.expect.element(selectors.currentWeather.minTemp).text.to.match(data.citySearch.minTemp) //is the min temp in the right format?
        browser.expect.element(selectors.currentWeather.wind).text.to.match(data.citySearch.wind) //is the wind in the right format?
        browser.expect.element(selectors.currentWeather.humidity).text.to.match(data.citySearch.humidity) //is the humidity in the right format?
        browser
            .verify.containsText(selectors.currentWeather.searchAgainButton, data.citySearch.buttonText) //is the button text as expected?
            .click(selectors.currentWeather.searchAgainButton) //clicks search again
            .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
    },
    'Search by zip': browser => {
        browser
            .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
            .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
            .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
        functions.enterValue(selectors.enterLocation.searchBox, data.zipSearch.searchString, browser) //enters the search string
        browser
            .click(selectors.enterLocation.submitButton) //clicks the search button
            .waitForElementVisible(selectors.currentWeather.currentTemp, 2000) //waits for the next screen to load by waiting for the current temperature
            .verify.containsText(selectors.currentWeather.title, data.globals.title) //is the title on this screen right?
            .verify.containsText(selectors.currentWeather.location, data.zipSearch.cityResult) //is the result city correct?
            .verify.elementPresent(selectors.currentWeather.icon) //without a LOT more logic, we can't test the icon being displayed, just that it is present.
            // .verify.containsText(selectors.currentWeather.currentTemp, data.citySearch.currentTemp)
            // you'd use that style verify if you are using plain text as data for the results.  RegEx goes a little differently.
            .expect.element(selectors.currentWeather.currentTemp).text.to.match(data.zipSearch.currentTemp) //is the current temp in the right format?
        // using an .expect instead of a .verify or .assert ends the browser chain.  Plus, where .verify will continue
        // tests after a failure, just about anything else off of the browser will stop on a failure.
        // So, we need to restart the browser chain after each .expect, AND be aware that it could end our test.
        browser.expect.element(selectors.currentWeather.maxTemp).text.to.match(data.zipSearch.maxTemp) //is the max temp in the right format?
        browser.expect.element(selectors.currentWeather.minTemp).text.to.match(data.zipSearch.minTemp) //is the min temp in the right format?
        browser.expect.element(selectors.currentWeather.wind).text.to.match(data.zipSearch.wind) //is the wind in the right format?
        browser.expect.element(selectors.currentWeather.humidity).text.to.match(data.zipSearch.humidity) //is the humidity in the right format?
        browser
            .verify.containsText(selectors.currentWeather.searchAgainButton, data.zipSearch.buttonText) //is the button text as expected?
            .click(selectors.currentWeather.searchAgainButton) //clicks search again
            .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
    },
    'Invalid searches get an error screen': browser => {
        browser
            .verify.containsText(selectors.enterLocation.title, data.globals.title) //is the title correct?
            .verify.containsText(selectors.enterLocation.submitButton, data.globals.searchButton) //does the submit button have the right text?
            .verify.attributeEquals(selectors.enterLocation.searchBox, 'placeholder', data.globals.placeholderText) //is the placeholder text correct?
        functions.enterValue(selectors.enterLocation.searchBox, data.errorScreen.searchString, browser) //enters the search string
        browser
            .click(selectors.enterLocation.submitButton) //clicks the search button
            .waitForElementVisible(selectors.errorMessage.errorMessage, 2000) //waits for the next screen to load by waiting for the current temperature
            .verify.containsText(selectors.errorMessage.title, data.globals.title) //is the title right on the new screen?
            .verify.containsText(selectors.errorMessage.errorMessage, data.errorScreen.errorMessage) //is the error message right?
            .verify.containsText(selectors.errorMessage.tryAgainButton, data.errorScreen.buttonText) //does the button have the right text?
            .click(selectors.errorMessage.tryAgainButton)
            .waitForElementVisible(selectors.enterLocation.searchBox, 2000) //waits and makes sure the home screen is returned to
    }
}
```

</details>

## Step 7

### Summary
This isn't all we can do.  I have a few challenges for you.

### Instructions
* Find a way to test the loading screen.  It shows up between every page load with an hourglass...
* Find ways to further simplify testing, especially if you're going to retest for additional locations, or invalid search values...
* Find places that might not make future testing easier, but where I wasn't as efficient as I could have been...

<details>

<summary> Detailed Instructions </summary>

<br />

Tell me if you get this far - send me a slack message!  I want to see how your tests turned out, whether you've finished the challenges or not!

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>

