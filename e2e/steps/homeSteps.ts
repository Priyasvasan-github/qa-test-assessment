'use strict';

import { Given, When, Then } from "cucumber";
import home from "../pageObjects/homePage";
import characters from "../pageObjects/characterPage";
import planets from "../pageObjects/planetPage";

const chai = require('chai');

let homePage = new home();
let characterPage = new characters();
let planetPage = new planets();
let expect = chai.expect;

Given('the user is on the Star Wars Search site', async() => {
    // Navigate to the home page.
    await homePage.getUrl();
});

When('the user clears the search box and searches again', async() => {
    // Clear the search box.
    await homePage.clearSearchBox();

    // Click the search button.
    await homePage.clickSearch();
});

Then('no details are found', async() => {
    // Verify the text displayed when no results are found.
    await expect(await homePage.getNotFound()).to.equal("Not found.");
});

Then('the previous search results are removed', async() => {
    // Verify if search results are not present
    await expect(await characterPage.verifyIfElementPresent()).to.be.false;
    await expect(await planetPage.verifyIfElementPresent()).to.be.false;
});