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

## Step 4

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
|_nightwatch
  |_tests
  |\_test_data

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

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>

