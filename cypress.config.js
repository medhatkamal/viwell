const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: { runMode: 0, openMode: 0},
  viewportHeight: 900,
  viewportWidth: 1440,
  numTestsKeptInMemory: 10000,
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  pageLoadTimeout: 60000,
  trashAssetsBeforeRuns: false,
  watchForFileChanges: false,

  env:{
    email    : "mmkh@mailinator.com",
    password : "12345678aA!"
  },
  e2e: {
    chromeWebSecurity: false,
    failOnStatusCode: false
  },
});
