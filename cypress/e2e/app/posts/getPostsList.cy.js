//check at least item structure

describe("Posts",()=>{
  it('should get the posts list', ()=>{
      cy.api({
      url: `/posts/`,
      method: 'GET',
    }).as("getPostsList")
    cy.get("@getPostsList").its("status").should("equal",200)
    cy.get("@getPostsList").its("body").each((item) => {
      expect(item).to.have.all.keys('userId', 'id', 'title', 'body')
    })
  });
})
