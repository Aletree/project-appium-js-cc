const {config} = require('../wdio.conf');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: "Android",
        deviceName: "NotUsed",       
        app: "/Users/alejandroc/Desktop/apps/AwesomeApp.apk",       
        appPackage: "com.awesomeapp",
        appActivity: ".MainActivity",
        browserName: '',
        platformVersion: "9",
        automationName: "UiAutomator2"
    }
];

exports.config = config;