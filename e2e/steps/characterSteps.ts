'use strict';

import { When, Then } from "cucumber";
import home from "../pageObjects/homePage";
import characters from "../pageObjects/characterPage"

const chai = require('chai');
const config = require("../config/configuration.json");

let homePage = new home();
let characterPage = new characters();
let expect = chai.expect;

var size:any;
export var characterData = {
    name: [],
    gender: [],
    birthYear: [],
    eyeColor: [],
    skinColor: []
}

/**
 * Extracts the of identifiers values from the JSON input.
 * @param characterName The name of the Character.
 * @param arrayObject The array object.
 * @param identifier The Json identifier.
 */
async function extractObjectValues(characterName:string, arrayObject:string[], identifier:string) {
    var objLength = config.characters[characterName].length;
    for (var i=0; i<objLength; i++) {
        arrayObject.push(config.characters[characterName][i][identifier]);
    }
}

/**
 * Assigns the to the array objects.
 * @param characterName The name of the Character.
 */
async function assignObjectValues(characterName:string) {
    await extractObjectValues(characterName, characterData.name, "name");
    await extractObjectValues(characterName, characterData.gender, "gender");
    await extractObjectValues(characterName, characterData.birthYear, "birth_year");
    await extractObjectValues(characterName, characterData.eyeColor, "eye_color");
    await extractObjectValues(characterName, characterData.skinColor, "skin_color");
}

/**
 * Verifies the page data to the stored values.
 */
async function verifyObjectValues() {
    await expect(await characterPage.getCharacterName()).to.deep.equal(characterData.name);
    await expect(await characterPage.getCharacterGender()).to.deep.equal(characterData.gender);
    await expect(await characterPage.getCharacterBirthYear()).to.deep.equal(characterData.birthYear);
    await expect(await characterPage.getCharacterEyeColor()).to.deep.equal(characterData.eyeColor);
    await expect(await characterPage.getCharacterSkinColor()).to.deep.equal(characterData.skinColor);
}

When('the user searches for character {string} details', async(characterName:string) => {
    // Select the "People" radio button.
    await homePage.selectPeople();

    // Perform the search for characters.
    await homePage.sendSearchString(characterName);

    // Click the search button.
    await homePage.clickSearch();
});

Then('the user is able to view only {string} character details', async(characterName:string) => {
    // Verify how many search results are displayed.
    size = await characterPage.getSizeofCharacters();
    await expect(size).to.have.lengthOf(1);
    
    // Extract the details of the character(s) from the JSON file.
    await assignObjectValues(characterName);

    // Verify if the details displayed are correct.
    await verifyObjectValues(); 
});

Then('the user is able to view multiple {string} character details', async(characterName:string) => {
    // Verify how many search results are displayed.
    size = await characterPage.getSizeofCharacters();
    await expect(size).to.not.have.lengthOf(1);
    
    // Extract the details of the character(s) from the JSON file.
    await assignObjectValues(characterName);

    // Verify if the details displayed are correct.
    await verifyObjectValues(); 
});

When('the user clears the search box and searches again for character {string}', async(name:string) => {
    // Reset the session data.
    characterData.name = [];
    characterData.gender = [];
    characterData.birthYear = [];
    characterData.eyeColor = [];
    characterData.skinColor = [];
    
    // Clear the search box.
    await homePage.clearSearchBox();
    
    // Perform the search for characters.
    await homePage.sendSearchString(name);

    // Click the search button.
    await homePage.clickSearch();    
});

When('the user searches for character {string} using keyboard strokes', async(characterName:string) => {
    // Select the "People" radio button.
    await homePage.selectPeople();

    // Perform the search for characters.
    await homePage.sendSearchString(characterName);

    // Click the ENTER key.
    await homePage.clickEnterKey();
});