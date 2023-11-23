import { Texts } from '../POM/Texts';

describe('Task 1: Login to app', () => {

  beforeEach('Navigate to login beofre starting', () => {
    cy.visit("https://accounts.tradeling.com/ae-en/login").wait(1000);
    
    cy.checkTitleVisibilty(Texts.txt_loginToYourAccount);
    cy.checkTitleVisibilty(Texts.txt_loginWith);
    cy.checkTitleVisibilty(Texts.txt_emailAddress);
    cy.checkTitleVisibilty(Texts.txt_mobileNumber);
    cy.checkTitleVisibilty(Texts.txt_continueUpperCase);
  });

  it('Login to App', () => {
    cy.contains("p","Email address").click();
    cy.get("#emailAddress").type(Cypress.env("email"));
    cy.get("[data-testid='login-form']").click();
    cy.get("#password").type(Cypress.env("password"));
    cy.get('[data-testid="login-verification"]').click().wait(3000);
    cy.contains("p","My Account").click({force: true});
    cy.contains("Hi, mmk mmkh!").should("be.visible");
  });
});