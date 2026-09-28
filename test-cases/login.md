# Casos de Teste - Login

## Informações:

| Campo | Valor |
|---|---|
|Sistema|SauceDemo|
|URL|https://www.saucedemo.com/|
|Tester|Leonardo Novais|
|Tipo de teste|Funcional|


## CT001 - Login com credenciais válidas

### Objetivo: 
1. Validar login com credenciais validas

### Dados de teste: 
Username: standard_user
password: secret_sauce

### Pré-condições:
1. Estar na tela de login

### Passos:
1. Inserir usuário valido
2. Inserir senha valida
3. clicar no botão de login

### Resultado esperado:
1. O sistema deve validar o acesso do usuário e direciona-lo para a pagina inicial

### Resultado obtido:
1. O usuário foi validado e direcionado para a pagina inicial do sistema

### Status:
1. Aprovado

-------------------------------------------------
## CT002 - Login com usuário invalido

### Objetivo:
1. Validar se o sistema impede o acesso ao inserir usuário invalido

### Dados de teste:
Username: user_teste
password: secret_sauce

### Pré-condições:
1. Estar na tela de login 

### Passos:
1. Inserir usuário invalido
2. Inserir senha valida
3. clicar no botão de login

### Resultado esperado:
1. O sistema deve impedir o acesso do usuário
2. O sistema deve exibir a mensagem de erro "Username and password do not match any user in this service"

Resultado obtido:
- Usuário foi impedido de acessar o sistema
- A mensagem de erro foi exibida "Username and password do not match any user in this service"

Status: 
- Aprovado

----------------------------------------------------------
#CT003 - Login com senha invalida

Objetivo:
Validar se o sistema impede o acesso ao inserir usuário invalido

Dados de teste:
Username: standard_user
password: senha123

Pré-condições:
- Estar na tela de login 

Passos:
- Inserir usuário valido
- Inserir senha invalida
- clicar no botão de login

resultado esperado:
- não acessar o sistema
- mensagem de erro "Username and password do not match any user in this service"

Resultado obtido:
- acesso não validado
- mensagem de erro exibida "Username and password do not match any user in this service"

Status: 
- Aprovado

----------------------------------------------------------

#CT004 - Login com usuário bloqueado

Objetivo:
Validar se o sistema impede o acesso de um usuário bloqueado

Dados de teste:
- Username: locked_out_user
- password: secret_sauce

Pré-condições:
Estar na tela de login

Passos:
- Inserir usuário bloqueado
- Inserir senha do usuário bloqueado
- clicar no botão login

Resultado esperado:
- O sistema deve bloquear o acesso do usuário 
- Mensagem "Sorry, this user has been locked out."

Resultado obtido:
- O usuário foi bloqueado de acessar o sistema
- Mensagem exibida "Sorry, this user has been locked out."

Status:
Aprovado

-----------------------------------------------------------------
#CT005 - Login com os campos vazio

Objetivo: 
- Validar se o sistema impede o acesso com campos vazios

Pré-condições:
- Estar na tela de login

Passos:
- Nao inserir usuário
- Nao inserir senha
- clicar no botão de login

Resultado esperado
- não acessar o sistema
- mensagem de erro "Username is required"

Resultado obtido:
- não acessar o sistema
- Mensagem de erro exibida "Username is required"

Status:
- Aprovado

---------------------------------------------------------------------
CARRINHO:

#CT006 - Adicionar produto ao carrinho

Objetivo:
- Validar se sistema adiciona produto ao carrinho 

Pré-condições:
- Ter acesso valido ao sistema

Passos:
- Acessar a pagina de produtos
- Clicar no primeiro produto
- Clicar no botão add to card

Resultado esperado:
- Produto adicionado ao carrinho

Resultado obtido:
- O produto foi adicionado ao carrinho

Status:
- Aprovado
 
---------------------------------------------------------------------
#CT007 - Remover produto do carrinho

Objetivo:
- Validar se o sistema remove o produto do carrinho

Pré-condições:
- Adicionar um produto no carrinho 

Passos:
- Entrar o sistema
- Acessar o carrinho
- Clicar no botão remove

Resultado esperado:
- Produto removido do carrinho

Resultado obtido:
- O produto foi removido do carrinho

Status:
- Aprovado

---------------------------------------------------------------------
#CT008 - Validar atualização do contador do carrinho ao adicionar produto

Objetivo:
- Validar que o contador do carrinho e atualizado ao adicionar um produto

Pré-condições:
- Usuário autenticado
- Estar na pagina de produtos 

Passos:
- Entrar o sistema
- Adicionar um produto no carrinho
- Observar o contador do carrinho

Resultado esperado:
- O contador deve mostrar a quantidade de produtos existentes no carrinho

Resultado obtido:
- O contador mostrou a quantidade certa de produtos existentes no carrinho

Status:
- Aprovado

---------------------------------------------------------------------
#CT009 - Validar atualização do contador do carrinho ao remover produto

Objetivo:
- Validar que o contador do carrinho e atualizado ao remover um produto

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

Passos:
- Adicionar um produto ao carrinho
- remover o produto do carrinho
- Observar o contador do carrinho

Resultado esperado:
- O contador deve mostrar a quantidade de produtos existentes no carrinho

Resultado obtido:
- O contador mostrou a quantidade certa de produtos existentes no carrinho

Status:
- Aprovado

---------------------------------------------------------------------
#CT010 - Validar a funcionalidade "continuar comprando"

Objetivo:
- Validar a funcionalidade do botão "continuar comprando" ao adicionar um produto no carrinho

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

Passos:
- Abrir o carrinho
- Clicar no botão "Continue Shopping"

Resultado esperado:
- O usuário deve ser redirecionado para a pagina de produtos novamente para continuar comprando

Resultado obtido:
- O sistema redirecionou o usuário para a pagina de produtos para continuar comprando

Status:
- Aprovado

---------------------------------------------------------------------
CHECKOUT:

#CT011 - Validar acesso ao checkout da compra

Objetivo:
- Validar que o usuário consegue prosseguir para a tela de checkout da sua compra

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

Passos:
- Acessar o carrinho
- Clicar no botão "checkout"


Resultado esperado:
- O usuário deve ser direcionar para a pagina checkout

Resultado obtido:
- O sistema direcionou o usuário para a pagina de checkout

Status:
- Aprovado


---------------------------------------------------------------------
#CT012 - Validar acesso ao checkout da compra

Objetivo:
- Validar que o usuário consegue prosseguir para a tela de checkout da sua compra

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

Passos:
- Acessar o carrinho
- Clicar no botão "checkout"


Resultado esperado:
- O usuário deve ser redirecionado para a pagina de produtos novamente para continuar comprando

Resultado obtido:
- O sistema redirecionou o usuário para a pagina de produtos para continuar comprando

Status:
- Aprovado

---------------------------------------------------------------------
#CT013 - Validar os campos vazios do checkout

Objetivo:
- Validar a obrigatoriedade de preenchimento nos campos da pagina de checkout

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

Passos:
- Acessar o carrinho
- Clicar no botão "checkout"
- Nao preencher nenhum campo
- Clicar no botão "continue"


Resultado esperado:
- O sistema deve impedir o prosseguimento do usuário sem o preenchimento dos dados
- Mensagem de erro "Error: First Name is required"

Resultado obtido:
- O sistema impediu que o usuário prosseguisse 
- Mensagem de erro "Error: First Name is required"

Status:
- Aprovado


---------------------------------------------------------------------
#CT014 - Validar prosseguimento preenchendo somente o campo first name

Objetivo:
- Validar a obrigatoriedade do preenchimento de todos os campos da pagina de checkout

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

Passos:
- Acessar o carrinho
- Clicar no botão "checkout"
- preencher somente o campo "first Name"
- Clicar no botão "continue"


Resultado esperado:
- O sistema deve impedir o prosseguimento do usuário sem o preenchimento de todos os dados
- Mensagem de erro "Error: Last Name is required"

Resultado obtido:
- O sistema impediu que o usuário prosseguisse 
- Mensagem de erro "Error: Last Name is required"

Status:
- Aprovado


---------------------------------------------------------------------
#CT015 - Validar prosseguimento preenchendo somente o campo first name e Last name sem o CEP

Objetivo:
- Validar a obrigatoriedade de preenchimento do campo CEP

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

Passos:
- Acessar o carrinho
- Clicar no botão "checkout"
- Preencher o campo "first Name"
- Preencher o campo "last name"
- Deixar o campo "CEP" em branco
- Clicar no botão "continue"


Resultado esperado:
- O sistema deve impedir o prosseguimento do usuário sem o preenchimento do campo CEP
- Mensagem de erro "Error: Postal Code is required"

Resultado obtido:
- O sistema impediu que o usuário prosseguisse 
- Mensagem de erro "Error: Postal Code is required"

Status:
- Aprovado

---------------------------------------------------------------------
#CT016 - Validar prosseguimento para a pagina "Checkout: Overview"

Objetivo:
- Validar o prosseguimento para a tela de "Checkout: Overview" ao preencher dados validos 

Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

Passos:
- Acessar o carrinho
- Clicar no botão "checkout"
- Preencher o campo "first Name"
- Preencher o campo "last name"
- Preencher o campo "CEP" 
- Clicar no botão "continue"


Resultado esperado:
- O sistema deve Direcionar o usuário para a pagina "Checkout: Overview"

Resultado obtido:
- O usuário foi direcionado para a pagina "Checkout: Overview"

Status:
- Aprovado


---------------------------------------------------------------------
#CT017 - Validar finalização da compra

Objetivo:
- Validar a finalização da compra do usuário  

Pré-condições:
- Usuário autenticado
- produto adicionado ao carrinho
- Estar na tela "Checkout: Overview"

Passos:
- clicar no botão "finish"


Resultado esperado:
- O sistema deve finalizar a compra do usuário 
- Direcionar para a tela "Checkout: Complete!"
- Mensagem exibida: "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"

Resultado obtido:
- O usuário finalizou a sua compra
- Foi direcionado para a tela de "Checkout: Complete!"
- Mensagem exibida: "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"


Status:
- Aprovado


