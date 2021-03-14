# Test Automation of The Star Wars Search site
This is a POC of test automation for the website The Star Wars Search hosted locally at http://localhost:4200/. The objective of this project is to create a E2E test automation framework skeleton for the FrontEnd.

This is a Node.js project that implements a BDD framework using Cucumber with Protractor written in TypeScript and uses Chai assertion. Cucumber HTML Reporter has been used to generate the test report.

## Table of Contents
* [Functionality](#functionality)
* [Behaviour Driven Development](#behavior-driven-development)
* [Page Object Model](#page-object-model)
* [Test Framework](#testing-framework)
* [How to Run the tests](#how-to-run-the-tests)
    * [Pre-requisite](#1-pre-requisite)
    * [Using npm to run the tests](#2-using-npm-to-run-the-tests)
    * [Test Result and Report](#3-test-result-and-report)
    * [CI-CD Integration](#4-ci-cd-integration)

# Functionality
The following flows has been automated:
  1. Search for star wars characters.
  2. Search for star wars planets.
  
# Behaviour Driven Development
BDD is a software development approach that allows the tester/business analyst to create test cases in simple text language. The test cases here in the automation framework are added in BDD format.

### Why BDD format?
    1) BDD allows the decoupling of system behaviour
    2) Using BDD format helps stakeholders to understand the test cases very easily
        
# Page Object Model
Page Object Model (POM) is a design pattern, mostly used in test automation that creates Object Repository (OR) for web UI elements (with Page object Classes). This test framework implements POM.

POM reduces code duplication and improves test maintenance. There should be a corresponding Page Class and Page methods which perform operations on those WebElements

### Why Page Object Model?
    1) Script maintenance.
    2) Object repository is independent of test cases.
    3) Provides structure to Automation Framework.

# Test Framework
* Protractor is a powerful library to test angular application.
* Cucumber is a BDD based test framework. Protractor, by default works with Jasmin framework. But, I've implemented a custom framework here by implementing Cucumber for protractor. All the functional tests are created in feature files (using Gherkin).
* TypeScript extends JavaScript by adding types. TypeScript saves you time by catching errors and providing fixes before you run code.
* Chai assertions has been used for all the test validations.
* Cucumber HTML Reporter with bootstrap theme has been used for reporting.

### Why Cucumber with Protractor framework?
		1) Easy Maintainability and Reusability
		2) Compatible with both server side and client side programming languages 
		3) Readability of tests
		4) Living documentation of test results
		5) Opensource tool with huge support Online

Alternatives options available in the market for frontend automation: Selenium-Webdriver, Protractor with Jasmin, WebdriverIO, SerenityJs, Cypress etc.
        
# How to Run the tests
## 1) Pre-requisite:
	* Chrome browser - latest version installed
	* Node.js installed in the machine and configured properly

## 2) Using npm to run the tests
npm scripts are already defined in the package.json which runs the configuration.js. Execute the following commands to run tests:

    To run all tests:
		npm install && npm run e2e

## 3) Test Result and Report
cucumber-html-reporter has one of the best reporting and the test reports are generated every time we execute the tests with screenshots.
When the project is cloned into local, test results reporting, along with screenshots, can be seen if we open **_`cucumber-test-results.html`_** from `(.\e2e\test-reports\cucumber-test-results.html)`.

## 4) CI-CD Integration
CircleCI is used for running the pipeline respective scripts can be found on .circleci folder and the tests are run automatically upon every commit and pull request.

Also last executed results can be found in this [link(click here for last executed test results)](https://circleci.com/api/v1.1/project/github/sripriyavasan/qa-test-assessment/latest/artifacts/0/e2e/test-reports/cucumber-test-results.html)
