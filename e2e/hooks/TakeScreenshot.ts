import { After, Status, HookScenarioResult }  from "cucumber";
import { browser } from "protractor";

/**
 * Takes screen shot at the end of the test.
 */
After(async function(scenario: HookScenarioResult) {
    if (scenario.result.status === Status.FAILED || Status.PASSED) {
        const screenshot = await browser.takeScreenshot();
        const img = Buffer.alloc(screenshot.length, screenshot, 'base64');
        await this.attach(img, 'image/png');
    };
});