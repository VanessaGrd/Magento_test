describe('check url', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get("h2.title").should("contain", "Hot Sellers")
    cy.get("p.info").should("contain", "Here is what`s trending on Luma right now")
    cy.get(".authorization-link").should("contain", "Sign In")
  })


})