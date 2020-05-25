module.exports = {
    "Header should be visible"(browser) {
        browser
            .url('http://127.0.0.1:5500/')
            .waitForElementVisible('h1')
            .assert.containsText('h1', 'Header')
            .saveScreenshot('tests_output/header.png')
    }
}