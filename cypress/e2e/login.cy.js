describe('login', () => {

  beforeEach(()=>{
    //Arrange
    cy.visit('https://www.saucedemo.com/')
  })

  //CT-LOGIN-001
  it('Login com credenciais válidas', () => {
    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  //CT-LOGIN-002
  it('Login com usuário invalido', () =>{
    //Act
    cy.get('[data-test="username"]').type('user.invalid')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  //CT-LOGIN-003
  it('Login com senha invalida',()=>{  
    //Act
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha123')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  //CT-LOGIN-004
  it('Login com usuário bloqueado',()=>{
    //Act
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  //CT-LOGIN-005
  it('Login com os campos vazio', ()=>{
    //Act
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username is required')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })
})
