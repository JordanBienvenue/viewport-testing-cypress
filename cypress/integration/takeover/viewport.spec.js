/// <reference types="cypress" />

const sizes = ['macbook-15','macbook-13','macbook-11','iphone-6', 'ipad-2','iphone-xr','iphone-x', 'iphone-6+','iphone-4',[812,375] ,[1024, 768]]

describe('Viewport', () => {
  sizes.forEach((size) => {
    it(`size: ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
      // cy.visit('https://www.lsl.digital/')
      cy.visit(Cypress.env('baseUrl'))
      cy.wait(3000)
    })
  })
})

