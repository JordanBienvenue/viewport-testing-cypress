/// <reference types="cypress" />

const sizes = ['macbook-15','macbook-13','macbook-11','iphone-6', 'ipad-2','iphone-xr','iphone-x', 'iphone-6+','iphone-4',[812,375] ,[1024, 768]]

describe('Logo', () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      // cy.visit('http://atomic.lexpress.mu/takeover/demo-area/?id=kiosk')
      cy.visit('http://atomic.lexpress.mu/takeover/kiosk/')
      cy.wait(3000)
    })
  })
})

