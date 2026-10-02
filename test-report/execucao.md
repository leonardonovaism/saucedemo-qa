# Test Report

## Informações:

| Campo | Valor |
|---|---|
|Sistema|SauceDemo|
|URL|https://www.saucedemo.com/|
|Tester|Leonardo Novais|
|Tipo de teste|Funcional Manual
|Sistema operacional| Windows 11|
|Navegador|Google chrome e Edge|
|Data|25/08/2026|


## Relatorio:

### Login:

| ID     | Cenário                       | Resultado esperado                               | Resultado obtido           | Status |
| ------ | ----------------------------- | ------------------------------------------------ | -------------------------- | ------ |
| CT-001 | Login com credenciais válidas | Usuário acessa a página de produtos              | Página de produtos exibida | ✅ PASS |
| CT-002 | Login com senha inválida      | Sistema deve impedir o acesso                    | Acesso impedido            | ✅ PASS |
| CT-003 | Login com usuário bloqueado   | Sistema deve informar que usuário está bloqueado | Mensagem apresentada       | ✅ PASS |
| CT-004 | Login com campos vazios       | Sistema deve impedir o acesso                    | Acesso impedido            | ✅ PASS |


### Carrinho:

|  |  |
|---|---|
|Casos Executados| 5|
|Aprovados| 5|
|Reprovados| 0| 

### Checkout:

|  |  |
|---|---|
|Casos Executados| 7 |
|Aprovados| 7 |
|Reprovados| 0 | 