
describe('Checkout', ()=>{
    beforeEach(()=>{
        //arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('#shopping_cart_container').click()
    })

    //CT-CHECKOUT-001
    it('Validar acesso ao checkout da compra', ()=>{
        //Act
        cy.get('[data-test="checkout"]').click()

        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
    })

    //CT-CHECKOUT-002
    it('Validar os campos vazios do checkout', ()=>{
        //arrange
        cy.get('[data-test="checkout"]').click()

        //Act
        cy.get('[data-test="continue"]').click()

        //Assert
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    })

    //CT-CHECKOUT-003
    it('Validar prosseguimento preenchendo somente o campo first name', ()=>{
        //arrange
        cy.get('[data-test="checkout"]').click()

        //Act
        cy.get('[data-test="firstName"]').type("Name.valid")
        cy.get('[data-test="continue"]').click()

        //Assert
        cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required')
    })

    //CT-CHECKOUT-004
    it('Validar prosseguimento preenchendo somente o campo first name e Last name sem o CEP', ()=>{
        //arrange
        cy.get('[data-test="checkout"]').click()

        //Act
        cy.get('[data-test="firstName"]').type("Name.valid")
        cy.get('[data-test="lastName"]').type("lastName.valid")
        cy.get('[data-test="continue"]').click()

        //Assert
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')

    })

    //CT-CHECKOUT-005
    it('Validar prosseguimento para a pagina Checkout: Overview', ()=>{
        //arrange
        cy.get('[data-test="checkout"]').click()

        //Act
        cy.get('[data-test="firstName"]').type("Name.valid")
        cy.get('[data-test="lastName"]').type("lastName.valid")
        cy.get('[data-test="postalCode"]').type("123456")
        cy.get('[data-test="continue"]').click()

        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
    })

    //CT-CHECKOUT-006

    it('Validar finalização da compra', ()=>{
        //arrange
        cy.get('#shopping_cart_container').click()
        

        //Act
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("Name.valid")
        cy.get('[data-test="lastName"]').type("lastName.valid")
        cy.get('[data-test="postalCode"]').type("123456")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()

        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        cy.get('#checkout_complete_container').should('be.visible')
    })

})      