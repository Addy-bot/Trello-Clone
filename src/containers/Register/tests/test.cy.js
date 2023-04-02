import React from 'react'
import Register from '../index'
import { BrowserRouter } from 'react-router-dom'

describe('<Register />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )
  })
  it('to test registration flow', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )
    cy.get('#username').type("test");
    cy.get('#email').type("hello@gmail.com");
    cy.get('#pwd').type("hello123");

    if (cy.get('input[type="submit"]').should('not.be.disabled')) {
      cy.get('input[type="submit"]').click();

      cy.on('window:alert', (text) => {
        expect(text).to.contains('User Successfully Registered! Click OK to Redirect To Login Page');
      });
    } else {
      //skip
    }
  })
})