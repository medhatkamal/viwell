import { Texts } from '../POM/Texts';

describe('Task 3: Filling a forum', () => {

  beforeEach('Navigate to app beofre starting', () => {
    cy.visit("https://www.tradeling.com/ae-en/rfq/create-rfq").wait(1000);
  });

  it('Login to App', () => {
    cy.get('[name="items.0.productName"]').type(Texts.txt_pampers);
    cy.contains(Texts.txt_papmersDetails).click();
    cy.get('input[placeholder="Qty"]').type("10");
    cy.get('[name="items.0.unit"]').click();
    cy.contains("Box").click();
    cy.contains("div", "Select").click();
    cy.contains("I have a target price").click();
    cy.get('[data-testid="rfq-targeted-price-0"]').type("100");
    cy.contains("div","Country").click().wait(1000);
    cy.contains("Albania").click();
    cy.contains("div","City").click().wait(1000);
    cy.contains("Babru").click();
    cy.get('#expiryDate').click();
    cy.get('div[aria-disabled="false"]').last().click();
    cy.contains("button","CONTINUE").click();

    cy.contains("button", "Edit").should("be.visible");
    cy.get('svg[color="#3BAB78"]').should("be.visible");
  });
});