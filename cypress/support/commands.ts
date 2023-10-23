
// Custom Commands for login-page

Cypress.Commands.add('login', function (email, password, rememberMe) {
  cy.visit('auth/login');

  cy.get('form input#input-email').type(email, {delay: 50});
  cy.get('form input#input-password').type(password, {delay: 50});

  if (rememberMe) {
    cy.get('form .custom-checkbox').click();
  }

  cy.get('form button[status="primary"]').click();

  cy.url().should('contain', '/pages');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom Commands for smart-table

Cypress.Commands.add('member', function (id, firstName, lastName, username, email, age ) {

  cy.visit('/pages/tables/smart-table');

  cy.get('i.nb-plus').click();

  cy.get('input-editor').eq(0).type(id, {delay: 50});
  cy.get('input-editor').eq(1).type(firstName, {delay: 50});
  cy.get('input-editor').eq(2).type(lastName, {delay: 50});
  cy.get('input-editor').eq(3).type(username, {delay: 50});
  cy.get('input-editor').eq(4).type(email, {delay: 50});
  cy.get('input-editor').eq(5).type(age, {delay: 50});

  cy.get('.ng2-smart-action.ng2-smart-action-add-create').click();

  cy.get('table-cell-view-mode').eq(0).should('have.text', '61');
  cy.get('table-cell-view-mode').eq(1).should('have.text', 'Andriy');
  cy.get('table-cell-view-mode').eq(2).should('have.text', 'Chuguy');
  cy.get('table-cell-view-mode').eq(3).should('have.text', '@tester');
  cy.get('table-cell-view-mode').eq(4).should('have.text', 'andriy@test.com');
  cy.get('table-cell-view-mode').eq(5).should('have.text', '30');

  cy.get('i.nb-edit').eq(0).click();

  cy.get('input-editor').eq(0).find('input').clear().type('80', {delay: 50});
  cy.get('input-editor').eq(1).find('input').clear().type('John', {delay: 50});
  cy.get('input-editor').eq(2).find('input').clear().type('Travolta', {delay: 50});

  cy.get('.ng2-smart-action.ng2-smart-action-edit-save').click();

  cy.get('table-cell-view-mode').eq(0).should('have.text', '80').should('be.visible');
  cy.get('table-cell-view-mode').eq(1).should('have.text', 'John').should('be.visible');
  cy.get('table-cell-view-mode').eq(2).should('have.text', 'Travolta').should('be.visible');

});
