
/**
 * Page containing specific selectors and methods
 */
class DashboardPage {
    /**
     * Same accessibility id's for the page elements below in both apps
     */
    get dasboardTitle() {
        return $('~dashboard-title');
    }
    get coinBTC() {
        return $('~Coin-btc');
    }
    get coinBCH() {
        return $('~Coin-bch');
    }
    get coinBTG() {
        return $('~Coin-btg');
    }
    get coinBCD() {
        return $('~Coin-bcd');
    }

    get coinETH() {
        return $('~Coin-eth');
    }
}

module.exports = new DashboardPage();
