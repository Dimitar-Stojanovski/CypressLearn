const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://demoqa.com",
    chromeWebSecurity:false,
    excludeSpecPattern:[
      //'*/**/spec.cy.js'
    ],
    // env{
    //   ""
    // }
    
    
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on,config)
      return config;

    },
    
  },
  
});
