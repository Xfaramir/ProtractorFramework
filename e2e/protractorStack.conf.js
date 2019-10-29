// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// How to connect to Browser Drivers
// 1. seleniumServerJar - to start a standalone Selenium Server locally.
// 2. seleniumAddress - to connect to a Selenium Server which is already
//    running.
// 3. sauceUser/sauceKey - to use remote Selenium Servers via Sauce Labs.
// 4. browserstackUser/browserstackKey - to use remote Selenium Servers via
// BrowserStack.
// 5. directConnect - to connect directly to the browser Drivers.
//    This option is only available for Firefox and Chrome.

// If you want to run just a single suite and not the entire specs you can use something like "protractor protractor.conf.js --suite homepage,search"

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  directConnect: false,
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  capabilities: {
    'browserstack.user': 'browserstackbog1',
    'browserstack.key': 'BVGzYmjq1uAyVRpazDhy',
    os: 'Windows',
    os_version: '10',
    browserName: 'Chrome',
    browser_version: '62.0',
    resolution: '1024x768'
  },
  allScriptsTimeout: 600000,
  suites: {
    homePage: [
      'src/specs/home/home.e2e-spec.ts',
      'src/specs/home/NavLinks.e23-spec.ts'
    ],
    playPage: 'src/specs/play/play.e2e-spec.ts',
    searchPage: 'src/specs/Search.e2e-spec.ts',
    learnPage: 'src/specs/learn/learn.e2e-spec.ts',
    eventPage: 'src/specs/events/events.e2e-spec.ts',
    storiesPage: 'src/specs/stories/stories.e2e-spec.ts',
    shopPage: 'src/specs/shop/shop.e2e-spec.ts',
    leaderboardPage: 'src/specs/events/leaderboards.e2e-spec.ts',
    visualTest: 'src/specs/visualCrossBrowser.e23-spec.ts'
  },
  baseUrl: '',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    //Creating Allure report from jasmine results
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: './e2e/allure-results'
      })
    );
    
    //Taking a screenshot at the end of each spec for jenkins allure report
    jasmine.getEnv().afterEach(function(done) {
      browser.takeScreenshot().then(function(png) {
        allure.createAttachment(
          'Screenshot',
          function() {
            return new Buffer(png, 'base64');
          },
          'image/png'
        )();
        done();
      });
    });
  }
};
