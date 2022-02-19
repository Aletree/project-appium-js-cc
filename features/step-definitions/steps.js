const { Given, When, Then } = require('@wdio/cucumber-framework');

const LandingPage = require('../pageobjects/landing.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const SettingsPage = require('../pageobjects/settings.page');

//Scenario: Settings tab load
Given(/^the current view is the app landing page$/,{timeout: 6000 * 1000}, async () => {
    console.log('Checking if the app loaded - START');
    await LandingPage.pressInstructionsTab();
    console.log('Checking if the app loaded - END');
    
});

When(/^the settings button is pressed$/, async () => {
    console.log('Press the settings button - START');
    await LandingPage.pressSettingsTab();
    console.log('Press the settings button - END');
}); 

Then(/^the settings tab loads$/, async () => {
    console.log('Then: Checking if settings view loaded... Start');    
    await expect(SettingsPage.settingsTitle).toBeExisting();
    console.log('Then: Checking if settings view loaded... End');   
});

//Scenario: Dashboard tab loads
Given(/^the current view is the landing page$/,{timeout: 6000 * 1000}, async () => {
    
    console.log('Then: Checking if the app loaded... Start');
    await LandingPage.pressInstructionsTab();
    console.log('Then: Checking if the app loaded... End');       
});

When(/^the dashboard button is pressed$/, async () => {  
    console.log('When: Press the dashboard button ... Start');      
    await LandingPage.pressDashboardTab();  
    console.log('When: Press the dashboard button ... End');    
}); 

Then(/^the dashboard tab loads$/, async () => {
    console.log('Then: Checking if dashboard view loaded... Start');    
    await expect(DashboardPage.dasboardTitle).toBeExisting();
    console.log('Then: Checking if dashboard view loaded... End');    
});

//Scenario: Validate side menu alert
Given(/^the user menu slider is opened$/,{timeout: 6000 * 1000}, async () => {
    console.log('Then: Checking if dashboard view loaded... Start');
    await LandingPage.pressInstructionsTab();
    await LandingPage.swipeRight();          
    console.log('Then: Checking if the app loaded... End');  
});

When(/^the side menu button is pressed$/, async () => {  
    console.log('When: Press the settings button ... Start');      
    await LandingPage.pressSideMenuButton();
    console.log('When: Press the settings button... End');     
});

Then(/^the alert is displayed$/, async () => {
    console.log('Then: Checking if dashboard view loaded... Start');    
    await expect(LandingPage.alert).toHaveTextContaining("OK");
    await LandingPage.pressAlertButton();
    console.log('Then: Checking if dashboard view loaded... End');  
});

//Scenario: Dashboard view loads coins ****Fail test case****
Given(/^the current view is landing page$/,{timeout: 6000 * 1000}, async () => {
    console.log('Then: Checking if the app loaded... Start');        
    await LandingPage.pressInstructionsTab();
    console.log('Then: Checking if the app loaded... End');  
});

When(/^the coins are selected$/, async () => {  
    console.log('When: Press the settings button ... Start');      
    await LandingPage.pressSettingsTab();
    await SettingsPage.pressBitcoinButton();
    await SettingsPage.pressWinnersButton();
    await LandingPage.pressDashboardTab(); 
    console.log('When: Press the settings button... End');     
});

Then(/^the correct coins are displayed$/, async () => {
    console.log('Then: Checking if dashboard view loaded... Start');    
    await expect(DashboardPage.coinBCD).toBeDisplayed();
    await expect(DashboardPage.coinBTC).toBeDisplayed();
    await expect(DashboardPage.coinETH).toBeDisplayed();
    console.log('Then: Checking if dashboard view loaded... End');  
});