
describe("Posts",()=>{
  it('should get the posts list', ()=>{
    const body = {
      id: 1,
      title: 'Updated Post',
      body: 'Hi everyone!',
      userId: 1
    }
    cy.api({
      url:`/posts/1`,
      method: 'PUT',
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).as("updatePost")
    cy.get("@updatePost").its("status").should("equal",200)
    cy.get("@updatePost").its("body").should("deep.include", body)
  });
})
