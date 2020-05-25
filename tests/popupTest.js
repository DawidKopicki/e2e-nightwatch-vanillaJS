module.exports = {
    "Pop-up should be open"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('aside button')
            .click('button:nth-child(2)')
            .assert.visible('.main-button')
            .click('.main-button')
            .assert.visible('.modal')
            .saveScreenshot('tests_output/modal-open.png')
    },
    "Data loader should be visible"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('aside button')
            .click('button:nth-child(2)')
            .assert.visible('.main-button')
            .click('.main-button')
            .waitForElementVisible('.modal p')
            .assert.containsText('.modal p', 'Loading...')
            .saveScreenshot('tests_output/data-loader.png')
    },
    "JSON data in modal should be loaded"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('aside button')
            .click('button:nth-child(2)')
            .assert.visible('.main-button')
            .click('.main-button')
            .pause(1500)
            .assert.visible('.modal__frame-content pre')
            .saveScreenshot('tests_output/json-data.png')
    }
}