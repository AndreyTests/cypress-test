//check also if it has all other fields (userId etc)

describe("Posts",()=>{
  it('should return post by id', ()=>{
    const post = {
      userId : 1,
      id : 1,
      title : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    cy.api({
      url: `/posts/${post.id}`,
      method: 'GET',
    }).its("body").should("deep.include", {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body
      })
  });
})
