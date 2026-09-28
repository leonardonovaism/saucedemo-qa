# Casos de Teste - Login

## Informações:

| Campo | Valor |
|---|---|
|Sistema|SauceDemo|
|URL|https://www.saucedemo.com/|
|Tester|Leonardo Novais|
|Tipo de teste|Funcional|


### CT001 - Login com credenciais válidas

#### Objetivo: 
1. Validar login com credenciais validas

#### Dados de teste: 
Username: standard_user
password: secret_sauce

#### Pré-condições:
1. Estar na tela de login

#### Passos:
1. Inserir usuário valido
2. Inserir senha valida
3. clicar no botão de login

#### Resultado esperado:
1. O sistema deve validar o acesso do usuário e direciona-lo para a pagina inicial

#### Resultado obtido:
1. O usuário foi validado e direcionado para a pagina inicial do sistema

#### Status:
1. Aprovado

-------------------------------------------------
### CT002 - Login com usuário invalido

#### Objetivo:
1. Validar se o sistema impede o acesso ao inserir usuário invalido

#### Dados de teste:
- Username: user_teste
- password: secret_sauce

#### Pré-condições:
1. Estar na tela de login 

#### Passos:
1. Inserir usuário invalido
2. Inserir senha valida
3. clicar no botão de login

#### Resultado esperado:
1. O sistema deve impedir o acesso do usuário
2. O sistema deve exibir a mensagem de erro "Username and password do not match any user in this service"

#### Resultado obtido:
1. Usuário foi impedido de acessar o sistema
2. A mensagem de erro foi exibida "Username and password do not match any user in this service"

#### Status: 
1. Aprovado

----------------------------------------------------------

### CT003 - Login com senha invalida

#### Objetivo:
1. Validar se o sistema impede o acesso ao inserir usuário invalido

#### Dados de teste:
- Username: standard_user
- Password: senha123

#### Pré-condições:
1. Estar na tela de login 

#### Passos:
1. Inserir usuário valido
2. Inserir senha invalida
3. Clicar no botão de login

#### resultado esperado:
1. Não acessar o sistema
2. Mensagem de erro "Username and password do not match any user in this service"

#### Resultado obtido:
1. Acesso não validado
2. Mensagem de erro exibida "Username and password do not match any user in this service"

#### Status: 
- Aprovado

----------------------------------------------------------

### CT004 - Login com usuário bloqueado

#### Objetivo:
1. Validar se o sistema impede o acesso de um usuário bloqueado

#### Dados de teste:
- Username: locked_out_user
- password: secret_sauce

#### Pré-condições:
1. Estar na tela de login

#### Passos:
1. Inserir usuário bloqueado
2. Inserir senha do usuário bloqueado
3. clicar no botão login

#### Resultado esperado:
1. O sistema deve bloquear o acesso do usuário 
2. Mensagem "Sorry, this user has been locked out."

#### Resultado obtido:
1. O usuário foi bloqueado de acessar o sistema
2. Mensagem exibida "Sorry, this user has been locked out."

#### Status:
- Aprovado

-----------------------------------------------------------------


### CT005 - Login com os campos vazio

#### Objetivo: 
- Validar se o sistema impede o acesso com campos vazios

#### Pré-condições:
- Estar na tela de login

#### Passos:
1. Nao inserir usuário
2. Nao inserir senha
3. clicar no botão de login

#### Resultado esperado
1. não acessar o sistema
2. mensagem de erro "Username is required"

#### Resultado obtido:
1. não acessar o sistema
2. Mensagem de erro exibida "Username is required"

#### Status:
- Aprovado