import { After }  from "cucumber";
import { characterData } from "../steps/characterSteps"
import { planetData } from "../steps/planetSteps"

/**
 * Resets the session data at the end of the test.
 */
After(async function () {
    characterData.name = [];
    characterData.gender = [];
    characterData.birthYear = [];
    characterData.eyeColor = [];
    characterData.skinColor = [];
    planetData.name = [];
    planetData.population = [];
    planetData.climate = [];
    planetData.gravity = [];
});