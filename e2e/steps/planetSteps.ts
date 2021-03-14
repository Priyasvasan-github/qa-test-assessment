'use strict';

import { When, Then } from "cucumber";
import home from "../pageObjects/homePage";
import planets from "../pageObjects/planetPage"

const chai = require('chai');
const config = require("../config/configuration.json");

let homePage = new home();
let planetPage = new planets();
let expect = chai.expect;

var size:any;
export var planetData = {
    name: [],
    population: [],
    climate: [],
    gravity: []
}

/**
 * Extracts the of identifiers values from the JSON input.
 * @param planetName The name of the Planet.
 * @param arrayObject The array object.
 * @param identifier The Json identifier.
 */
 async function extractObjectValues(planetName:string, arrayObject:string[], identifier:string) {
    var objLength = config.planets[planetName].length;
    for (var i=0; i<objLength; i++) {
        arrayObject.push(config.planets[planetName][i][identifier]);
    }
}

/**
 * Assigns the to the array objects.
 * @param planetName The name of the Planet.
 */
async function assignObjectValues(planetName:string) {
    await extractObjectValues(planetName, planetData.name, "name");
    await extractObjectValues(planetName, planetData.population, "population");
    await extractObjectValues(planetName, planetData.climate, "climate");
    await extractObjectValues(planetName, planetData.gravity, "gravity");
}

/**
 * Verifies the page data to the stored values.
 */
async function verifyObjectValues() {
    await expect(await planetPage.getPlanetName()).to.deep.equal(planetData.name);
    await expect(await planetPage.getPlanetPolulation()).to.deep.equal(planetData.population);
    await expect(await planetPage.getPlanetClimate()).to.deep.equal(planetData.climate);
    await expect(await planetPage.getPlanetGravity()).to.deep.equal(planetData.gravity);
}

When('the user searches for planet {string} details', async(planetName:string) => {
    // Select the "Planets" radio button.
    await homePage.selectPlanets();

    // Perform the search for planets.
    await homePage.sendSearchString(planetName);

    // Click the search button.
    await homePage.clickSearch();
});

Then('the user is able to view only {string} planet details', async(planetName:string) => {
    // Verify how many search results are displayed.
    size = await planetPage.getSizeofPlanets();
    await expect(size).to.have.lengthOf(1);
    
    // Extract the details of the planet(s) from the JSON file.    
    await assignObjectValues(planetName);

    // Verify if the details displayed are correct.
    await verifyObjectValues(); 
});

Then('the user is able to view multiple {string} planet details', async(planetName:string) => {
    // Verify how many search results are displayed.
    size = await planetPage.getSizeofPlanets();
    await expect(size).to.not.have.lengthOf(1);
    
    // Extract the details of the planet(s) from the JSON file.    
    await assignObjectValues(planetName);

    // Verify if the details displayed are correct.
    await verifyObjectValues();
});

When('the user clears the search box and searches again for planet {string}', async(name:string) => {
    // Reset the session data.
    planetData.name = [];
    planetData.population = [];
    planetData.climate = [];
    planetData.gravity = [];
    
    // Clear the search box.
    await homePage.clearSearchBox();

    // Perform the search for planets.
    await homePage.sendSearchString(name);

    // Click the search button.
    await homePage.clickSearch();    
});

When('the user searches for planet {string} using keyboard strokes', async(planetName:string) =>  {
    // Select the "Planets" radio button.
    await homePage.selectPlanets();

    // Perform the search for planets.
    await homePage.sendSearchString(planetName);

    // Click the ENTER key.
    await homePage.clickEnterKey();
});