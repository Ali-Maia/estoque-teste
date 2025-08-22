# Projeto de Testes Automatizados - Estoque Web

## Objetivo

Este projeto tem como objetivo compor um portfólio de testes automatizados utilizando Cypress e JavaScript, incluindo documentação dos testes e da estrutura do projeto. Os testes são realizados na aplicação web [Estoque Web](https://ali-maia.github.io/estoque-web/), simulando cenários reais de cadastro, edição, exclusão, compra e reabastecimento de produtos.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a automação dos cenários.
- **Relatórios**: Geração automática de relatórios em HTML com o `cypress-mochawesome-reporter`.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Testes automatizados organizados por funcionalidade.
  - `cypress/fixtures/`: Dados de teste e imagens utilizadas nos cenários.
  - `cypress/support/`: Implementação dos Custom Commands e configuração global do Cypress.
  - `cypress/reports/`: Relatórios gerados após a execução dos testes.
  - `cypress/screenshots/`: Capturas de tela dos testes (geradas automaticamente).

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

Este projeto serve como referência para automação de testes de aplicações web, incluindo boas práticas de organização, documentação e geração de