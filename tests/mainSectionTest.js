module.exports = {
    "Text in main should be replaced after click"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('aside button')
            .click('button:nth-child(1)')
            .assert.containsText('.main-content', 'This is text after click on first button.')
            .saveScreenshot('tests_output/first-button.png')
    },
    "Temporary text should not be visible after click"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('aside button')
            .click('button:nth-child(1)')
            .assert.not.containsText('.main-content', 'There is no text to display!')
            .saveScreenshot('tests_output/first-button-temp-text.png')
    },
    "Text in main should be replaced with a button after click on second button"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('aside button')
            .click('button:nth-child(2)')
            .assert.visible('.main-button')
            .saveScreenshot('tests_output/second-button.png')
    }
}