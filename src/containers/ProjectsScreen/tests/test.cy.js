import React from 'react'
import ProjectsScreen from '../index'
import { BrowserRouter } from 'react-router-dom'

describe('<ProjectsScreen />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <ProjectsScreen />
      </BrowserRouter>
    )
  })

  it('to test PopUp', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <ProjectsScreen />
      </BrowserRouter>
    )
    cy.get('#card').click();
    cy.get('.popup').should('exist');
  })

  // it('to test Drag and Drop', () => {
  //   // see: https://on.cypress.io/mounting-react
  //   cy.mount(
  //     <BrowserRouter>
  //       <ProjectsScreen />
  //     </BrowserRouter>
  //   )
  // cy.get('Draggable').trigger('dragstart', { force: true }).trigger('dragleave', { force: true });
  // cy.get('Droppable').trigger('dragenter', { force: true }).trigger('dragover', { force: true }).
  //   trigger('drop', { force: true }).trigger('dragend', { force: true });
  // })
})