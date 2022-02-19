
/**
 * Page Selectors
 * 
 */
const SELECTORS = {
    SETTINGS_TITLE: browser.isAndroid
        ? '~settings-title'
        : '//XCUIElementTypeStaticText[@name="settings-title"]',
    SHOW_LOSERS: browser.isAndroid
        ? '//*[@resource-id="checkLosers"]'
        : '~Only show losers',
    SHOW_WINNERS: browser.isAndroid
        ? '//*[@resource-id="checkWinners"]'
        : '~Only show winners',
    SHOW_BITCOINS: browser.isAndroid
        ? '//*[@resource-id="checkBTC"]'
        : '~Only show "Bitcoin" coins',
};

/**
 * Page containing specific selectors and methods
 */
class DashboardPage {
    
    get settingsTitle() {
        return $(SELECTORS.SETTINGS_TITLE);
    }

    get bitcoinButton() {
        return $(SELECTORS.SHOW_BITCOINS);
    }

    get winnersButton() {
        return $(SELECTORS.SHOW_WINNERS);
    }

    get losersButton() {
        return $(SELECTORS.SHOW_LOSERS);
    }

    async pressBitcoinButton () {
        await this.bitcoinButton.click()
    }
    async pressWinnersButton () {
        await this.winnersButton.click()
    }

}

module.exports = new DashboardPage();
