import { Texts } from '../POM/Texts';

describe('Task 2: Add Item to Cart', () => {

  beforeEach('Navigate to app beofre starting', () => {
    cy.visit("https://www.tradeling.com/ae-en").wait(3000);
    cy.get('[data-test-id="header-search-input"]').should('be.visible');
  });

  it('Add Item to Cart', () => {
    cy.get('[data-test-id="header-search-input"]').type("pampers{enter}");
    cy.contains(Texts.txt_papmersDetails).click();
    cy.get('[data-testid="pdp-cart-add-button"]').click();
    cy.get('[data-testid="drawer-cta-go-to-cart"]').click();

    cy.contains("My Cart").should('be.visible');
    cy.contains("Shipment 1").should('be.visible');
    cy.contains(Texts.txt_papmersDetails).should('be.visible');
  });
});