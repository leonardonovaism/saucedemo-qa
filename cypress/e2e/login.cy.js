describe('login', () => {
 
  beforeEach(()=>{
    cy.env(['url']).then(({url})=>{
      cy.visit(url)
    })
  })

  //CT-LOGIN-001  
  it('Login com credenciais válidas', () => {
    //Act
    cy.env(['sauceUsername', 'saucePassword'])
    .then(({sauceUsername, saucePassword})=>{
    cy.get('[data-test="username"]').type(sauceUsername)
    cy.get('[data-test="password"]').type(saucePassword)
    })
    
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  //CT-LOGIN-002
  it('Login com usuário invalido', () =>{
    //Act
    cy.get('[data-test="username"]').type('user.invalid')
    cy.env(['saucePassword'])
    .then(({saucePassword})=>{
    cy.get('[data-test="password"]').type(saucePassword)
    })
        
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  //CT-LOGIN-003
  it('Login com senha invalida',()=>{  
    //Act
    cy.env(['sauceUsername'])
    .then(({sauceUsername})=>{
      cy.get('[data-test="username"]').type(sauceUsername)
    })
    cy.get('[data-test="password"]').type('senha123')
    cy.get('[data-test="login-button"]').click()

    //Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  //CT-LOGIN-004
  it('Login com usuário bloqueado',()=>{
    //Act
    cy.env(['sauceLockedUser', 'saucePassword'])
    .then(({sauceLockedUser, saucePassword})=>{
      cy.get('[data-test="username"]').type(sauceLockedUser)
      cy.get('[data-test="password"]').type(saucePassword)
    })

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
