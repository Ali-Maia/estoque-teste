# Projeto de Testes Automatizados - Estoque Web

## Objetivo

Este projeto tem como objetivo compor um portfólio de testes automatizados utilizando Cypress, K6 e JavaScript, incluindo documentação dos testes e da estrutura do projeto. Os testes são realizados na aplicação web [Estoque Web](https://ali-maia.github.io/estoque-web/), simulando cenários de cadastro, edição, exclusão, compra e reabastecimento de produtos.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **K6**: Ferramenta para testes de performance e carga.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a automação dos cenários.
- **Relatórios**: Geração automática de relatórios em HTML com o `cypress-mochawesome-reporter`.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Testes automatizados organizados por funcionalidade.
  - `cypress/fixtures/`: Dados de teste e imagens utilizadas nos cenários.
  - `cypress/support/`: Implementação dos Custom Commands e configuração global do Cypress.
  - `cypress/reports/`: Relatórios gerados após a execução dos testes.
  - `cypress/screenshots/`: Capturas de tela dos testes (geradas automaticamente).

## Documentação do Projeto
Para uma compreensão da metodologia, dos requisitos e dos cenários de teste, consulte a documentação detalhada nos links abaixo:

- [Regras de Negócio](https://www.notion.so/Regras-de-Neg-cio-2534cbe3af0081b7bf56cfe6e812bd0f?source=copy_link)
- [Requisitos](https://www.notion.so/Requisitos-2574cbe3af0080bebd92f573f3762219?source=copy_link)
- [Condições de Teste](https://www.notion.so/Condi-es-de-Teste-2534cbe3af008183ab0eec0cbad69ba2?source=copy_link)
- [Casos de Teste](https://docs.google.com/document/d/1pm2X0-NS0fcc56S4qil_JPrODS9k7HAg/edit?usp=sharing&ouid=106052703680357413018&rtpof=true&sd=true)

## Instalação

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/Ali-Maia/estoque-teste.git
   cd teste-estoque
   ```

2. **Instale as dependências**:
   ```sh
   npm install
   ```

## Execução dos Testes

- **Executar todos os testes em modo headless**:
  ```sh
  npm test
  ```
- **Executar Cypress com interface gráfica**:
  ```sh
  npm run cy:open
  ```
- **Executar Cypress em modo headed**:
  ```sh
  npm run cy:headed
  ```

Após a execução, os relatórios em HTML estarão disponíveis em `cypress/reports/html/index.html`.

## Documentação dos Testes

Os testes estão organizados em arquivos na pasta [`cypress/e2e/`](cypress/e2e):

- [`cadastro.cy.js`](cypress/e2e/cadastro.cy.js): Testa o cadastro de produtos, incluindo validações de campos obrigatórios, valores negativos e tipos de dados.
- [`compra.cy.js`](cypress/e2e/compra.cy.js): Testa o fluxo de compra de produtos, incluindo validações de estoque e quantidade.
- [`edicao.cy.js`](cypress/e2e/edicao.cy.js): Testa a edição de produtos e validações de campos.
- [`exclusao.cy.js`](cypress/e2e/exclusao.cy.js): Testa a exclusão de produtos do sistema.
- [`reabastecer.cy.js`](cypress/e2e/reabastecer.cy.js): Testa o reabastecimento de estoque de produtos.

Os dados de teste estão em [`produtos.json`](cypress/fixtures/produtos.json).

## Custom Commands

Os comandos personalizados estão implementados em [`commands.js`](cypress/support/commands.js):

- `cy.entrarSite()`: Acessa a aplicação.
- `cy.cadastrarProduto(produto)`: Realiza o cadastro de um produto.
- `cy.editarProduto(produto)`: Edita um produto existente.
- `cy.verificarMensagem(mensagem)`: Valida mensagens exibidas no formulário.
- `cy.verificarProduto(produto)`: Valida a presença e os dados do produto na tabela.
- `cy.excluirProduto()`: Exclui um produto.
- `cy.comprarProduto(produto)`: Realiza a compra de um produto.
- `cy.verificarMensagemModal(funcao, mensagem)`: Valida mensagens exibidas em modais.
- `cy.reabastecerProduto(quantidade)`: Reabastece o estoque de um produto.

Consulte o arquivo [`commands.js`](cypress/support/commands.js) para detalhes de implementação.

---
## Testes de Performance com K6

Além dos testes funcionais, este projeto inclui testes de performance utilizando [K6](https://k6.io/) e JavaScript, localizados na pasta [`k6/tests/`](k6/tests):

- [`page-load.test.js`](k6/tests/page-load.test.js): Mede o tempo de carregamento da página principal.
- [`static-assets.test.js`](k6/tests/static-assets.test.js): Avalia o carregamento dos recursos estáticos da aplicação.
- [`stress.test.js`](k6/tests/stress.test.js): Realiza testes de stress simulando múltiplos usuários simultâneos.

As variáveis e utilitários estão em [`utils/variaveis.js`](k6/utils/variaveis.js).

### Execução dos Testes de Performance

1. **Defina a variável de ambiente `BASE_URL`** para apontar para a aplicação alvo:
   ```sh
   set BASE_URL=https://ali-maia.github.io/estoque-web/
   ```

2. **Execute um teste K6** (exemplo para o teste de stress):
   ```sh
   k6 run k6/tests/stress.test.js
   ```

3. **Acompanhe o relatório em tempo real e exporte para HTML**:
   ```sh
   set K6_WEB_DASHBOARD=true
   set K6_WEB_DASHBOARD_EXPORT=html-report.html
   k6 run k6/tests/stress.test.js
   ```

   O relatório será salvo como `html-report.html` na raiz do projeto.

> **Observação:** No Windows, use `set` para definir variáveis de ambiente no terminal. No Linux/Mac, use `export`.

---

Este projeto comtempla automação de testes de aplicações web, incluindo boas práticas de organização, documentação e geração de relatórios.