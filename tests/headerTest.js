const pageUrl = 'http://127.0.0.1:5500/';
const headerH1 = 'h1';

module.exports = {
    "Title should contain a specific text"(browser) {
        browser
            .url(pageUrl)
            .assert.title("Vanilla JS Test")
            .saveScreenshot('tests_output/title.png')
    },
    "Header should be visible"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(headerH1)
            .assert.containsText(headerH1, 'Header')
            .saveScreenshot('tests_output/header.png')
    }
}