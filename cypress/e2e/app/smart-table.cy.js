
describe("edit smart-table", () => {
  it('should edit smart-table with new member', () => {
    cy.visit("/pages/tables/smart-table")

    cy.get('i.nb-plus').click()

    cy.get("input-editor").eq(0).type("61",{delay:50})
    cy.get("input-editor").eq(1).type("Andriy",{delay:50})
    cy.get("input-editor").eq(2).type("Chuguy",{delay:50})
    cy.get("input-editor").eq(3).type("@tester",{delay:50})
    cy.get("input-editor").eq(4).type("andriy@test.com",{delay:50})
    cy.get("input-editor").eq(5).type("30",{delay:50})

    cy.get('.ng2-smart-action.ng2-smart-action-add-create').click()

    cy.get("table-cell-view-mode").eq(0).should("have.text", "61")
    cy.get("table-cell-view-mode").eq(1).should("have.text", "Andriy")
    cy.get("table-cell-view-mode").eq(2).should("have.text", "Chuguy")
    cy.get("table-cell-view-mode").eq(3).should("have.text", "@tester")
    cy.get("table-cell-view-mode").eq(4).should("have.text", "andriy@test.com")
    cy.get("table-cell-view-mode").eq(5).should("have.text", "30")

    cy.get('i.nb-edit').eq(0).click()

    cy.get("input-editor").eq(0).find('input').clear().type("80",{delay:50})
    cy.get("input-editor").eq(1).find('input').clear().type("John",{delay:50})
    cy.get("input-editor").eq(2).find('input').clear().type("Travolta",{delay:50})

    cy.get('.ng2-smart-action.ng2-smart-action-edit-save').click()

    cy.get("table-cell-view-mode").eq(0).should("have.text", "80").should('be.visible')
    cy.get("table-cell-view-mode").eq(1).should("have.text", "John").should('be.visible')
    cy.get("table-cell-view-mode").eq(2).should("have.text", "Travolta").should('be.visible')

  })
})
