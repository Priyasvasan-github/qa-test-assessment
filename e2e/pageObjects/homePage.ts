'use strict';

import basePage from "./basePage";
import { ElementFinder, element, by } from "protractor";

/**
 * Home Page Object and Actions
 */
export default class homePage extends basePage {    
    people:ElementFinder;
    planets:ElementFinder;
    searchBox:ElementFinder;
    search:ElementFinder;
    notFound:ElementFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.people = element(by.css('label[for="people"]'));
        this.planets = element(by.css('label[for="planets"]'));
        this.searchBox = element(by.id('query'));
        this.search = element(by.buttonText('Search'));
        this.notFound = element(by.xpath('/html/body/app-root/div/div/div/div[1]'))
	}

    /**
     * Clicks the "People" radio button.
     */
    public async selectPeople() {
        await super.waitForElementToBeClickable(this.people);
        await this.people.click();
    }

    /**
     * Clicks the "Planets" radio button.
     */
    public async selectPlanets() {
        await super.waitForElementToBeClickable(this.planets);
        await this.planets.click();
    }

    /**
     * Inputs the search string the search box.
     * @param searchString The string to be searched.
     */
    public async sendSearchString(searchString: string) {
        await super.waitForElementToBeClickable(this.searchBox);
        await this.searchBox.sendKeys(searchString);
    }

    /**
     * Clears the search box.
     */
    public async clearSearchBox() {
        await super.waitForElementToBeClickable(this.searchBox);
        await this.searchBox.clear();
    }

    /**
     * Clicks the Search button.
     */
    public async clickSearch() {
        await super.waitForElementToBeClickable(this.search);
        await this.search.click();
    }
    
    /**
     * Get the text of 'Not Found' element.
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getNotFound(): Promise<string> {
        await super.waitForElementToBeClickable(this.notFound);
        return await this.notFound.getText();
    }
}