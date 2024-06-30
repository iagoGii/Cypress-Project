const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9e4z4t',
  viewportWidth: 1920,
  viewportHeight: 1300,

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    experimentalStudio: true,
    baseUrl: 'https://automationpratice.com.br',
    defaultCommandTimeout: 4000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
