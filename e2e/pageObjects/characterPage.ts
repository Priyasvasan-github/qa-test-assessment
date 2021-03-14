'use strict';

import basePage from "./basePage";
import { ElementArrayFinder, element, by } from "protractor";

/**
 * Character Page Object and Actions
 */
export default class characterPage extends basePage {    
    characters:ElementArrayFinder;
    characterName:ElementArrayFinder;
    characterGender:ElementArrayFinder;
    characterBirthYear:ElementArrayFinder;
    characterEyeColor:ElementArrayFinder;
    characterSkinColor:ElementArrayFinder;
    
    /**
	 * @constructor
	 * @extends BasePage
	 */
	constructor()
	{
		super();
        this.characters = element.all(by.css('app-character div.card-body'));
        this.characterName = element.all(by.css('div.card-body h6'));
        this.characterGender = element.all(by.css('div:nth-child(2) > div.col-sm-10'));
        this.characterBirthYear = element.all(by.css('div:nth-child(3) > div.col-sm-10'));
        this.characterEyeColor = element.all(by.css('div:nth-child(4) > div.col-sm-10'));
        this.characterSkinColor = element.all(by.css('div:nth-child(5) > div.col-sm-10'));
	}

    /**
     * Gets the size of character cards.
     * @returns {Promise<any>} A promise that will be resolved with the element's size as a object.
     */
    public async getSizeofCharacters(): Promise<any> {
        await super.waitForElementToBeClickable(this.characters.first());
        return await this.characters.getSize();
    }

    /**
     * Gets the name of character(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getCharacterName(): Promise<string> {
        return await this.characterName.getText();
    }

    /**
     * Gets the gender of character(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getCharacterGender(): Promise<string> {
        return await this.characterGender.getText();
    }

    /**
     * Gets the birth year of character(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getCharacterBirthYear(): Promise<string> {
        return await this.characterBirthYear.getText();
    }

    /**
     * Gets the eye color of character(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getCharacterEyeColor(): Promise<string> {
        return await this.characterEyeColor.getText();
    }

    /**
     * Gets the skin color of character(s).
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    public async getCharacterSkinColor(): Promise<string> {
        return await this.characterSkinColor.getText();
    }

    /**
     * Verifies if the web element is present in the page
     * @returns {Promise<boolean>} A promise which resolves to whether the element is present on the page.
     */
    public async verifyIfElementPresent(): Promise<boolean> {
        return await super.isElementPresent(this.characters.first());
    }
}