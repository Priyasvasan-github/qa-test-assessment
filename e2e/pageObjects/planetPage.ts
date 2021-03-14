'use strict';

import basePage from "./basePage";
import { ElementArrayFinder, element, by } from "protractor";

/**
 * Planet Page Object and Actions
 */
export default class planetPage extends basePage {    
    planets:ElementArrayFinder;
    planetName:ElementArrayFinder;
    planetPopulation:ElementArrayFinder;
    planetClimate:ElementArrayFinder;
    planetGravity:ElementArrayFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.planets = element.all(by.css('app-planet div.card-body'));
        this.planetName = element.all(by.css('app-planet div.card-body h6'));
        this.planetPopulation = element.all(by.css('app-planet div:nth-child(2) > div.col-sm-10'));
        this.planetClimate = element.all(by.css('app-planet div:nth-child(3) > div.col-sm-10'));
        this.planetGravity = element.all(by.css('app-planet div:nth-child(4) > div.col-sm-10'));
	}

    /**
     * Gets the size of planet cards.
     * @returns {Promise<any>} A promise that will be resolved with the element's size as a object.
     */
    public async getSizeofPlanets(): Promise<any> {
        await super.waitForElementToBeClickable(this.planets.first());
        return await this.planets.getSize();
    }

    /**
     * Gets the name of planet(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getPlanetName(): Promise<string> {
        return await this.planetName.getText();
    }

    /**
     * Gets the poluplation of planet(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getPlanetPolulation(): Promise<string> {
        return await this.planetPopulation.getText();
    }

    /**
     * Gets the climate of planet(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getPlanetClimate(): Promise<string> {
        return await this.planetClimate.getText();
    }

    /**
     * Gets the gravity of planet(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getPlanetGravity(): Promise<string> {
        return await this.planetGravity.getText();
    }

    /**
     * Verifies if the web element is present in the page
     * @returns {Promise<boolean>} A promise which resolves to whether the element is present on the page.
     */
    public async verifyIfElementPresent(): Promise<boolean> {
        return await super.isElementPresent(this.planets.first());
    }
}