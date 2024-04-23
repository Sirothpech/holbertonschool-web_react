# React Intro

## Tasks

### 0. Basic application

Create a basic app named dashboard using create-react-app in your task_0 directory.

- Add the Holberton logo and a favicon to the src/ directory under dashboard/.

Remove the unused files:

- service-worker
- index.css
- App.test.js

In `task_0/dashboard/src/App.js`, create a function `App` that returns:

- A header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard.
- A body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard.
- A footer div with a class named App-footer containing at least one paragraph with the text Copyright 2020 - Holberton School.

### 1. Embedding expressions, functions

In `task_1/dashboard/src/utils.js`:

- Create a function named `getFullYear` that will return the current year.
- Create a function named `getFooterCopy`:
  - It accepts one argument `isIndex` (boolean). When true, the function should return "Holberton School". When false, the function should return "Holberton School main dashboard".

Modify the footer returned in `task_1/dashboard/src/App.js` to use these two functions.

Create a `Notifications` element:

- It should import React.
- It should export a function.
- The function should return a div with the class `Notifications`.
- The div should contain a paragraph with the text "Here is the list of notifications".

Import the file `Notifications.css`.

Style the `Notifications` class in `task_1/dashboard/src/Notifications.css`.

Render the `Notifications` element:

- Modify `task_1/dashboard/src/index.js` to render the new element (Notifications) in a div named root-notifications.

### 2. Modify the App

In `task_2/dashboard/src/App.js`, under the paragraph that says "Login to access the full dashboard":

- Add a label and input for email.
- Add a label and input for password.
- When the user clicks on a label, it should select the corresponding input.
- Add one button element with the text “OK”.

### 3. Modify the Notifications

In `task_2/dashboard/src/utils.js`:

- Create a function named `getLatestNotification` that returns the following string: `<strong>Urgent requirement</strong> - complete by EOD`.

In `task_2/dashboard/src/Notifications.js`:

- Add a button element with inline styling:
  - Show button on the right side of notifications box.
  - aria-label is Close.
  - When user clicks on the button it logs to the console "Close button has been clicked".
  - Add the priority to the first and second items of the list using a data attribute.
  - The last item correctly displays the content of `getLatestNotification` using dangerouslySetInnerHTML.

In `task_2/dashboard/src/Notifications.css`:

- Style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.

### 4. Create basic tests with four tests

In `task_3/dashboard/src/utils.test.js`:

- Write a test to check that the function `getFullYear` returns the correct year.
- Write a test to check that `getFooterCopy` returns the correct string when the argument is true or false.
- Write a test checking the returned string for `getLatestNotification`.

### 5. Install Enzyme

- Install Enzyme with npm.
- Create a file named `setupTests.js` and configure the adapter for Enzyme.

### 6. Create React tests

In `task_3/dashboard/src/App.test.js`:

- Create four tests:
  - Test that App renders without crashing.
  - Verify that App renders a div with the class `App-header`.
  - Verify that App renders a div with the class `App-body`.
  - Verify that App renders a div with the class `App-footer`.

In `task_3/dashboard/src/Notifications.test.js`:

- Create three tests:
  - Test that Notifications renders without crashing.
  - Verify that Notifications renders three list items.
  - Verify that Notifications renders the text "Here is the list of notifications".

### 7. Deploy to a GitHub page

- Deploy your application to GitHub Pages using `gh-pages` branch and create-react-app.
- Your application should be working correctly when accessing the GitHub URL.

### 8. Create a project using Webpack

- Set up a system to output a `bundle.js` file in a `dist` folder.
- Set up a dev server with hot reloading.
- Create a `src` folder that will contain your Javascript.
- Set up a simple html file in the `dist` folder that will import the bundle file in the body tag.
- Install and configure the various plugins to support:
  - Inline source map
  - Style loader
  - CSS loader
  - Image webpack loader

### 9. Install Babel

- Install Babel, and add the presets for `preset-env` and `preset-react`.
- Add a `babel-loader` to the Webpack configuration so you can support js and jsx files.
- Import the files that you wrote in the previous task. All the Javascript and React code should be within the `src` folder.

### 10. Reorganize the files

- Every file related to the App, should be within a `App` folder.
- Every file related to the Notifications, should be within a `Notifications` folder.
- Every file related to the utils functions, should be within a `utils` folder.
- Every asset file should be within the `assets` folder.
- Set up the `favicon.ico` in the `dist` folder.
- Webpack config file should be within a `config` folder if it isn’t already.

### 11. Testing

- Install Jest and Enzyme to run your test suites.
- Your package.json should have the two following scripts:
  - `"start": "webpack-dev-server --mode development --config config/webpack.config.js"`
  - `"test": "jest"`
- Running the first script should start your dev server and build without any error.
- Running the second script should start your test suites and pass for each test.