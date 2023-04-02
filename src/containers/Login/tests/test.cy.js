import React from 'react'
import Login from '../index'
import { BrowserRouter } from 'react-router-dom'


describe('<Login />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>);

  });

  it('to test login flow is working', () => {
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>);

    cy.get('#email').type("hello@gmail.com");
    cy.get('#pwd').type("hello");

    if (cy.get('input[type="submit"]').should('not.be.disabled')) {
      cy.get('input[type="submit"]').click();

      cy.on('window:alert', (text) => {
        expect(text).to.contains('User Data Not Found! Click OK To Redirect To Registration Page');
      });
    } else {
      //skip
    }
  });

})