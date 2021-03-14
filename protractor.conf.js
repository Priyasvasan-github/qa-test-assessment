// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const reporter = require('cucumber-html-reporter');
const mkdirp = require('mkdirp')

exports.config = {
  debug: false,
  getPageTimeout: 30 * 1000,
  allScriptsTimeout: 30 * 1000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/steps/*.ts',
      './e2e/hooks/*.ts'
    ],
    format: [
      'json:./e2e/test-reports/cucumber-test-results.json'
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  },
  // Create the report folder
  beforeLaunch: () => {
    mkdirp('./e2e/test-reports')
  },
  // Generate report on completion of run
  onComplete: () => {
      var options = {
        theme: 'bootstrap',
        jsonFile: './e2e/test-reports/cucumber-test-results.json',
        output: './e2e/test-reports/cucumber-test-results.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
          "Application": "The Star Wars Search",
          "Browser": "Chrome",
      }
    };
    reporter.generate(options);
  }
};
