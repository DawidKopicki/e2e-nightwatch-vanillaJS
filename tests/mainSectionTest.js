const pageUrl = 'http://127.0.0.1:5500/';
const asideButtons = 'aside button';
const mainContentClass = '.main-content';
const firstButton = 'button:nth-child(1)';
const secondButton = 'button:nth-child(2)';
const modalButton = '.main-button';

module.exports = {
    "Text in main section should be replaced after click on the first button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(firstButton)
            .assert.containsText(mainContentClass, 'This is text after click on first button.')
            .saveScreenshot('tests_output/first-button.png')
    },
    "Temporary text should not be visible after click on first button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(firstButton)
            .assert.not.containsText(mainContentClass, 'There is no text to display!')
            .saveScreenshot('tests_output/first-button-temp-text.png')
    },
    "Alert should be open after two clicks on first button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(firstButton)
            .click(firstButton)
            .pause(1000)
            .saveScreenshot('tests_output/first-button-alert.png')
            .acceptAlert()
    },
    "Temporary text should not be visible after click on second button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .assert.not.elementPresent(mainContentClass)
            .saveScreenshot('tests_output/second-button-temp-text.png')
    },
    "Text in main section should be replaced with a button after click on second button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .assert.visible(modalButton)
            .saveScreenshot('tests_output/second-button.png')
    },
    "Text in main section should be replaced with a button after click on second button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .assert.visible(modalButton)
            .saveScreenshot('tests_output/second-button.png')
    },
    "Alert should be open after two clicks on second button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .click(secondButton)
            .pause(1000)
            .saveScreenshot('tests_output/second-button-alert.png')
            .acceptAlert()
    }
}