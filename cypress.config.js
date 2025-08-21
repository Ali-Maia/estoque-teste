const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ali-maia.github.io/estoque-web/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
