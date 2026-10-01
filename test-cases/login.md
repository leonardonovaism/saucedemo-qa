# Casos de Teste - Login

## Informações:

| Campo | Valor |
|---|---|
|Sistema|SauceDemo|
|URL|https://www.saucedemo.com/|
|Tester|Leonardo Novais|
|Tipo de teste|Funcional|


----------------------------------------------------------

### CT-LOGIN-001 - Login com credenciais válidas

#### Objetivo: 
- Validar login com credenciais validas

#### Dados de teste:
|Campo|Valor|
|---|---| 
|Username|standard_user|
|password|secret_sauce|

#### Pré-condições:
- Estar na tela de login

#### Passos:
1. Inserir usuário valido
2. Inserir senha valida
3. clicar no botão de login

#### Resultado esperado:
- O sistema deve validar o acesso do usuário e direciona-lo para a pagina inicial

#### Resultado obtido:
- O usuário foi validado e direcionado para a pagina inicial do sistema

#### Status:
- Aprovado

-------------------------------------------------
### CT-LOGIN-002 - Login com usuário invalido

#### Objetivo:
- Validar se o sistema impede o acesso ao inserir usuário invalido

#### Dados de teste:
|Campo|Valor|
|---|---| 
|Username|user_teste|
|password|secret_sauce|

#### Pré-condições:
- Estar na tela de login 

#### Passos:
1. Inserir usuário invalido
2. Inserir senha valida
3. clicar no botão de login

#### Resultado esperado:
- O sistema deve impedir o acesso do usuário
- O sistema deve exibir a mensagem de erro "Username and password do not match any user in this service"

#### Resultado obtido:
- Usuário foi impedido de acessar o sistema
- A mensagem de erro foi exibida "Username and password do not match any user in this service"

#### Status: 
- Aprovado

----------------------------------------------------------

### CT-LOGIN-003 - Login com senha invalida

#### Objetivo:
- Validar se o sistema impede o acesso ao inserir senha invalida

#### Dados de teste:
|Campo|Valor|
|---|---| 
|Username|user_teste|
|password|senha123|


#### Pré-condições:
- Estar na tela de login 

#### Passos:
1. Inserir usuário valido
2. Inserir senha invalida
3. Clicar no botão de login

#### resultado esperado:
- Não acessar o sistema
- Mensagem de erro "Username and password do not match any user in this service"

#### Resultado obtido:
- Acesso não validado
- Mensagem de erro exibida "Username and password do not match any user in this service"

#### Status: 
- Aprovado

----------------------------------------------------------

### CT-LOGIN-004 - Login com usuário bloqueado

#### Objetivo:
- Validar se o sistema impede o acesso de um usuário bloqueado

#### Dados de teste:
|Campo|Valor|
|---|---| 
|Username|locked_out_user|
|password|secret_sauce|

#### Pré-condições:
- Estar na tela de login

#### Passos:
1. Inserir usuário bloqueado
2. Inserir senha do usuário bloqueado
3. clicar no botão login

#### Resultado esperado:
- O sistema deve bloquear o acesso do usuário 
- Mensagem "Sorry, this user has been locked out."

#### Resultado obtido:
- O usuário foi bloqueado de acessar o sistema
- Mensagem exibida "Sorry, this user has been locked out."

#### Status:
- Aprovado

-----------------------------------------------------------------


### CT-LOGIN-005 - Login com os campos vazio

#### Objetivo: 
- Validar se o sistema impede o acesso com campos vazios

#### Pré-condições:
- Estar na tela de login

#### Passos:
1. Nao inserir usuário
2. Nao inserir senha
3. clicar no botão de login

#### Resultado esperado
- não acessar o sistema
- mensagem de erro "Username is required"

#### Resultado obtido:
- não acessar o sistema
- Mensagem de erro exibida "Username is required"

#### Status:
- Aprovado