# Casos de Teste - Checkout

### CT011 - Validar acesso ao checkout da compra

#### Objetivo:
- Validar que o usuário consegue prosseguir para a tela de checkout da sua compra

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

#### Passos:
1. Acessar o carrinho
2. Clicar no botão "checkout"


#### Resultado esperado:
- O usuário deve ser direcionar para a pagina checkout

#### Resultado obtido:
- O sistema direcionou o usuário para a pagina de checkout

#### Status:
- Aprovado


---------------------------------------------------------------------
### CT012 - Validar acesso ao checkout da compra

#### Objetivo:
- Validar que o usuário consegue prosseguir para a tela de checkout da sua compra

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

#### Passos:
1. Acessar o carrinho
2. Clicar no botão "checkout"


#### Resultado esperado:
- O usuário deve ser redirecionado para a pagina de produtos novamente para continuar comprando

#### Resultado obtido:
- O sistema redirecionou o usuário para a pagina de produtos para continuar comprando

#### Status:
- Aprovado

---------------------------------------------------------------------
### CT013 - Validar os campos vazios do checkout

#### Objetivo:
- Validar a obrigatoriedade de preenchimento nos campos da pagina de checkout

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

#### Passos:
1. Acessar o carrinho
2. Clicar no botão "checkout"
3. Nao preencher nenhum campo
4. Clicar no botão "continue"


#### Resultado esperado:
- O sistema deve impedir o prosseguimento do usuário sem o preenchimento dos dados
- Mensagem de erro "Error: First Name is required"

#### Resultado obtido:
- O sistema impediu que o usuário prosseguisse 
- Mensagem de erro "Error: First Name is required"

#### Status:
- Aprovado


---------------------------------------------------------------------
### CT014 - Validar prosseguimento preenchendo somente o campo first name

#### Objetivo:
- Validar a obrigatoriedade do preenchimento de todos os campos da pagina de checkout

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

#### Passos:
1. Acessar o carrinho
2. Clicar no botão "checkout"
3. preencher somente o campo "first Name"
4. Clicar no botão "continue"


#### Resultado esperado:
- O sistema deve impedir o prosseguimento do usuário sem o preenchimento de todos os dados
- Mensagem de erro "Error: Last Name is required"

#### Resultado obtido:
- O sistema impediu que o usuário prosseguisse 
- Mensagem de erro "Error: Last Name is required"

#### Status:
- Aprovado


---------------------------------------------------------------------
### CT015 - Validar prosseguimento preenchendo somente o campo first name e Last name sem o CEP

#### Objetivo:
- Validar a obrigatoriedade de preenchimento do campo CEP

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

#### Passos:
1. Acessar o carrinho
2. Clicar no botão "checkout"
3. Preencher o campo "first Name"
4. Preencher o campo "last name"
5. Deixar o campo "CEP" em branco
6. Clicar no botão "continue"


#### Resultado esperado:
- O sistema deve impedir o prosseguimento do usuário sem o preenchimento do campo CEP
- Mensagem de erro "Error: Postal Code is required"

#### Resultado obtido:
- O sistema impediu que o usuário prosseguisse 
- Mensagem de erro "Error: Postal Code is required"

#### Status:
- Aprovado

---------------------------------------------------------------------
### CT016 - Validar prosseguimento para a pagina "Checkout: Overview"

#### Objetivo:
- Validar o prosseguimento para a tela de "Checkout: Overview" ao preencher dados validos 

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 
- Estar na tela de "Checkout: Your Information"

#### Passos:
1. Acessar o carrinho
2. Clicar no botão "checkout"
3. Preencher o campo "first Name"
4. Preencher o campo "last name"
5. Preencher o campo "CEP" 
6. Clicar no botão "continue"


#### Resultado esperado:
- O sistema deve Direcionar o usuário para a pagina "Checkout: Overview"

#### Resultado obtido:
- O usuário foi direcionado para a pagina "Checkout: Overview"

#### Status:
- Aprovado


---------------------------------------------------------------------
### CT017 - Validar finalização da compra

#### Objetivo:
- Validar a finalização da compra do usuário  

#### Pré-condições:
- Usuário autenticado
- produto adicionado ao carrinho
- Estar na tela "Checkout: Overview"

#### Passos:
1. clicar no botão "finish"


#### Resultado esperado:
- O sistema deve finalizar a compra do usuário 
- Direcionar para a tela "Checkout: Complete!"
- Mensagem exibida: "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"

#### Resultado obtido:
- O usuário finalizou a sua compra
- Foi direcionado para a tela de "Checkout: Complete!"
- Mensagem exibida: "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"


#### Status:
- Aprovado
