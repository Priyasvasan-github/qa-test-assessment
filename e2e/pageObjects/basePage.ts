'use strict';

import { ElementFinder, protractor, browser } from "protractor";

const GLOBAL_TIMEOUT = 30 * 1000;
const elementCondition = protractor.ExpectedConditions;

/**
 * Base Page Object. Defines the actions at browser level.
 */
export default class basePage {
    /**
	 * @constructor
	 */
	constructor()
	{}

    /**
     * Navigates to the given web URL.
     */
    public async getUrl() {
        await browser.get('/');
    }

    /**
     * Waits for the web element to be clickable.
     * @param {ElementFinder} elementFinder The element to check.
     */
    public async waitForElementToBeClickable(elementFinder:ElementFinder) {
        await browser.wait(elementCondition.elementToBeClickable(elementFinder), GLOBAL_TIMEOUT);
    }

    /**
     * Performs the ENTER key actions.
     */
    public async clickEnterKey() {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }
    
    /**
     * Determines whether the element is present on the page.
     * @param {ElementFinder} elementFinder The element to check.
     * @returns {Promise<boolean>} A promise which resolves to whether
     * the element is present on the page.
     */
    public async isElementPresent(elementFinder:ElementFinder): Promise<boolean> {
        return await browser.isElementPresent(elementFinder);
    }
}
