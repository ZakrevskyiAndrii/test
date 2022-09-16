/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays two todo items by default', () => {
    cy.get('.test').should('have.text', 'hello you');
  });
});
