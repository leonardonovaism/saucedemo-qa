describe('login', () => {
  it('Login com credenciais válidas', () => {
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

  })

  it('Login com usuário invalido', () =>{
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('user.invalid')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('Login com senha invalida',()=>{
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha123')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
  it('Login com usuário bloqueado',()=>{
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
  it.only('Login com os campos vazio', ()=>{
    //Arrange
    cy.visit('https://www.saucedemo.com/')

    //Act
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username is required')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})