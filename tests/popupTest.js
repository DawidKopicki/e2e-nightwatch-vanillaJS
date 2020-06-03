const pageUrl = 'http://127.0.0.1:5500/';
const modal = '.modal';
const modalParagraph = '.modal p';
const modalPre = '.modal__frame-content pre';
const asideButtons = 'aside button';
const secondButton = 'button:nth-child(2)';
const modalButton = '.main-button';
const modalFooterButton = '.modal__frame-footer button';
const modalCloseButton = '.modal__frame-header-close';

module.exports = {
    "Pop-up should be open"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .assert.visible(modalButton)
            .click(modalButton)
            .assert.cssProperty(modal, "display", "block")
            .assert.visible(modal)
            .saveScreenshot('tests_output/modal-open.png')
    },
    "Data loader should be visible"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .assert.visible(modalButton)
            .click(modalButton)
            .waitForElementVisible(modalParagraph)
            .assert.containsText(modalParagraph, 'Loading...')
            .saveScreenshot('tests_output/data-loader.png')
    },
    "JSON data in modal should be loaded"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .assert.visible(modalButton)
            .click(modalButton)
            .pause(1500)
            .assert.visible(modalPre)
            .saveScreenshot('tests_output/json-data.png')
    },
    "Modal should not be visible after click on OK button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .waitForElementVisible(modalButton)
            .click(modalButton)
            .pause(1500)
            .click(modalFooterButton)
            .assert.cssProperty(modal, "display", "none")
            .assert.not.visible(modal)
            .saveScreenshot('tests_output/modal-close-first.png')
    },
    "Modal should not be visible after click on X button"(browser) {
        browser
            .url(pageUrl)
            .waitForElementVisible(asideButtons)
            .click(secondButton)
            .waitForElementVisible(modalButton)
            .click(modalButton)
            .pause(1500)
            .click(modalCloseButton)
            .assert.cssProperty(modal, "display", "none")
            .assert.not.visible(modal)
            .saveScreenshot('tests_output/modal-close-second.png')
    }
}