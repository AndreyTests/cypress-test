
describe("log in", () => {
  it('should login with valid credentials', () => {
    cy.visit("auth/login")

    cy.get("form input#input-email").type("andriy@test.com",{delay:50})
    cy.get("form input#input-password").type("Andriy123",{delay:50})

    cy.get('form .custom-checkbox').click()

    cy.get('form button[status="primary"]').click()

    cy.url().should('contain', '/pages')

  })
})
