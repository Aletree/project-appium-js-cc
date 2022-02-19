# project-appium-js-cc

## Used:

Node
Appium
WebdriverIO
Cucumber

## Running tests:

- Clone the project: https://github.com/Aletree/project-appium-js-cc.git

- Install dependencies. Run the following command in the terminal: npm i

- Update the hostname and baseUrl in **wdio.conf.js

- Update capabilities with the location of the app, deviceName, etc. in ** configuration/android.config.js** and ** configuration/ios.config.js

- Execute the following command to run the android tests: ** npm run android

- Execute the following command to run the ios tests: ** npm run ios

- After tests run, execute the following command to generate the allure report: allure generate ** allure_output_dir

- After generating the report, run the following command to open it in the browser: allure open ** allure_output_dir


