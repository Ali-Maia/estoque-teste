
Cypress.Commands.add('entrarSite', () => {
  cy.visit('/')
})

Cypress.Commands.add('cadastrarProduto', (produto) => {
  // Verifica se o campo 'name' foi fornecido antes de preencher
  if (produto.name) {
    cy.get('[name="name"]').click().type(produto.name);
  }

  // A lógica se repete para todos os outros campos
  if (produto.filamentType) {
    cy.get('[name="filamentType"]').click().type(produto.filamentType);
  }

  if (produto.colors) {
    cy.get('[name="colors"]').click().type(produto.colors);
  }

  if (produto.image) {
    // Para upload de imagem, tratamos um pouco diferente
    cy.get('[name="image"]').selectFile(produto.image, { force: true });
  }

  if (produto.weight) {
    cy.get('[name="weight"]').click().type(produto.weight);
  }

  if (produto.dimensions) {
    cy.get('[name="dimensions"]').click().type(produto.dimensions);
  }

  if (produto.price) {
    cy.get('[name="price"]').click().type(produto.price);
  }

  if (produto.quantity) {
    cy.get('[name="quantity"]').click().type(produto.quantity);
  }

  if (produto.description) {
    cy.get('[name="description"]').click().type(produto.description);
  }

  // Clica no botão de submissão no final
  cy.get('#submit-button').click();
});

Cypress.Commands.add('verificarMensagemErro', (mensagem) => {
  cy.contains('#form-hint', mensagem).should('be.visible')
})