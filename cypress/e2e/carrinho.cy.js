/// <reference types="cypress" />

describe('carrinho', ()=>{
    beforeEach(()=>{
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    //CT-CART-001
   it('Adicionar produto ao carrinho', ()=>{  
        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        //Assert
        cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1')

        cy.get('#shopping_cart_container').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

   //CT-CART-002
   it('Remover produto do carrinho', ()=>{
        //Arrange
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click()

        //act
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        //assert
        cy.get('[data-test="shopping-cart-badge"]')
        .should('not.exist')
    })

   //CT-CART-005
   it('Validar a funcionalidade "continuar comprando', ()=>{
        //Arrange
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click()

        //Act
        cy.get('[data-test="continue-shopping"]').click()

        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

})