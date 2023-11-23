// == Assertions == 

Cypress.Commands.add('checkTitleVisibilty', (titleValue) => {
    cy.contains(titleValue).should('be.visible');
});