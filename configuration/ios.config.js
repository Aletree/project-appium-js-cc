const {config} = require('../wdio.conf');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        deviceName: "iPhone 8",
        platformName: 'iOS',
        platformVersion: "12.1",
        automationName: 'XCUITest',
        app: '/Users/alejandroc/Desktop/apps/AwesomeApp.app',       
    }
];

exports.config = config;