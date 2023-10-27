
describe("Posts",()=>{
  it('should get the posts list', ()=>{
    cy.api({
      url: `/posts/`,
      method: 'GET',
    }).as("getPostsList")
    cy.get("@getPostsList").its("status").should("equal",200)
  });
})
