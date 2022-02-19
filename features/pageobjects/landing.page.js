

/**
 * Page Selectors
 * 
 */

const SELECTORS = {
    SETTINGS_TAB: browser.isAndroid
        ? '//*[@resource-id="Settings tab"]'
        : '~Settings tab',
    INSTRUCTIONS_TAB: browser.isAndroid
        ? '//*[@resource-id="Instructions tab"]'
        : '~Instructions tab',
    DASHBOARD_TAB: browser.isAndroid
        ? '//*[@resource-id="Dashboard tab"]'
        : '~Dashboard tab',
    SIDEMENU_BUTTON: browser.isAndroid
        ? '//*[@resource-id="sidemenuButton"]'
        : '~Get the ultimate answer',
    ALERT: browser.isAndroid
        ? '//*[@resource-id="android:id/button1"]'
        : '~OK',
    LEFT_SIDE: browser.isAndroid
        ? '//*[@resource-id="leftslide"]'
        : '~leftslide',
};

/**
 * Page containing specific selectors and methods
 */
class LandingPage {

    get settingsTab() {
        return $(SELECTORS.SETTINGS_TAB);
    }

    get instructionsTab() {
        return $(SELECTORS.INSTRUCTIONS_TAB);
    }

    get dashboardTab() {
        return $(SELECTORS.DASHBOARD_TAB);
    }

    get sideMenuButton() {
        return $(SELECTORS.SIDEMENU_BUTTON);
    }

    get alert() {
        return $(SELECTORS.ALERT);
    }

    get leftSide() {
        return $(SELECTORS.LEFT_SIDE);
    }

    async pressSettingsTab () {
        await this.settingsTab.click()
    }

    async pressDashboardTab () {
        await this.dashboardTab.click()
    }

    async pressSideMenuButton () {
        await this.sideMenuButton.click()
    }

    async pressAlertButton () {
        await this.alert.click()
    }

    async pressInstructionsTab () {
        await this.instructionsTab.click()
    }

    async swipeRight(){     
        
        const dim =  await driver.getWindowRect();
        var startX = 0;
        var endX = 0;
        var startY = 0;
        
        startY = (dim.height / 2);
        startX = (dim.width * 0.05);
        endX = (dim.width * 0.90);
        
        await driver.touchPerform([{
            action: 'press',
            options: {x: startX, y: startY },
            }, {
            action: 'wait',
            options: { ms: 3000 },
            }, {
            action: 'moveTo',
            options: {x: endX, y:startY },
            }, {
            action: 'release',
        }]);
    }

}

module.exports = new LandingPage();
