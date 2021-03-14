import { Before }  from "cucumber";   
import { browser } from "protractor";

/**
 * Deletes all brower cookies
 * Enables waitForAngularEnabled for angular projects
 * Maximizes the browser before executing the tests
 * at the begining of the test.
*/
Before(async function () {
    await browser.waitForAngularEnabled(true);
    await browser.manage().window().maximize();
    await browser.manage().deleteAllCookies();
});