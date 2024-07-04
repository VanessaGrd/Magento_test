describe('selected tops', () => {
  it('select', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-4').trigger('mouseover')
    cy.get(".level1").first().click()
    cy.url().should("include","women/tops-women.html")
    cy.get(".page-title").should("contain", "Tops")
    cy.get(".product-image-photo").first().click()
    cy.url().should("include", "breathe-easy-tank.html")
    cy.get(".page-title").should("contain", "Breathe-Easy Tank")
    cy.wait(6000)
    cy.get("#option-label-size-143-item-166").click().should("have.css","backgroundColor","rgb(255, 255, 255)")
    cy.get("#option-label-color-93-item-57").click()  
    cy.get("#product-addtocart-button").click()
    cy.wait(5000)
    cy.get(".action.showcart").click()
    cy.get(".item-qty.cart-item-qty").clear().type("2")
    cy.get(".update-cart-item").click()
    cy.get("#top-cart-btn-checkout").click()
    cy.get("#customer-email").type("vanessa.test@gmail.com")
    cy.get("#LTAWV09.input-text").type("Vanessa")
 




  })
})