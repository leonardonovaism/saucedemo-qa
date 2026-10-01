# Casos de Teste - Carrinho de compra

### CT006 - Adicionar produto ao carrinho

#### Objetivo:
- Validar se sistema adiciona produto ao carrinho 

#### Pré-condições:
- Ter acesso valido ao sistema

#### Passos:
1. Acessar a pagina de produtos
2. Clicar no primeiro produto
3. Clicar no botão add to card

#### Resultado esperado:
- Produto adicionado ao carrinho

#### Resultado obtido:
- O produto foi adicionado ao carrinho

#### Status:
- Aprovado
 
---------------------------------------------------------------------
### CT007 - Remover produto do carrinho

#### Objetivo:
- Validar se o sistema remove o produto do carrinho

#### Pré-condições:
- Adicionar um produto no carrinho 

#### Passos:
1. Entrar o sistema
2. Acessar o carrinho
3. Clicar no botão remove

#### Resultado esperado:
- Produto removido do carrinho

#### Resultado obtido:
- O produto foi removido do carrinho

#### Status:
- Aprovado

---------------------------------------------------------------------
### CT008 - Validar atualização do contador do carrinho ao adicionar produto

#### Objetivo:
- Validar que o contador do carrinho e atualizado ao adicionar um produto

#### Pré-condições:
- Usuário autenticado
- Estar na pagina de produtos 

#### Passos:
1. Entrar o sistema
2. Adicionar um produto no carrinho
3. Observar o contador do carrinho

#### Resultado esperado:
- O contador deve mostrar a quantidade de produtos existentes no carrinho

#### Resultado obtido:
- O contador mostrou a quantidade certa de produtos existentes no carrinho

#### Status:
- Aprovado

---------------------------------------------------------------------
### CT009 - Validar atualização do contador do carrinho ao remover produto

#### Objetivo:
- Validar que o contador do carrinho e atualizado ao remover um produto

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

#### Passos:
1. Adicionar um produto ao carrinho
2. remover o produto do carrinho
3. Observar o contador do carrinho

#### Resultado esperado:
- O contador deve mostrar a quantidade de produtos existentes no carrinho

#### Resultado obtido:
- O contador mostrou a quantidade certa de produtos existentes no carrinho

#### Status:
- Aprovado

---------------------------------------------------------------------
### CT010 - Validar a funcionalidade "continuar comprando"

#### Objetivo:
- Validar a funcionalidade do botão "continuar comprando" ao adicionar um produto no carrinho

#### Pré-condições:
- Usuário autenticado
- Produto adicionado ao carrinho 

#### Passos:
1. Abrir o carrinho
2. Clicar no botão "Continue Shopping"

#### Resultado esperado:
- O usuário deve ser redirecionado para a pagina de produtos novamente para continuar comprando

#### Resultado obtido:
- O sistema redirecionou o usuário para a pagina de produtos para continuar comprando

Status:
- Aprovado
