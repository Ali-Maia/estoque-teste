
Cypress.Commands.add('entrarSite', () => {
  cy.visit('/')
})

Cypress.Commands.add('cadastrarProduto', (produto) => {
  // Verifica se o campo 'name' foi fornecido antes de preencher
  if (produto.name) {
    cy.get('[name="name"]').click().type(produto.name);
  }

  if (produto.filamentType) {
    cy.get('[name="filamentType"]').click().type(produto.filamentType);
  }

  if (produto.colors) {
    cy.get('[name="colors"]').click().type(produto.colors);
  }

  if (produto.image) {
 
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

  cy.get('#submit-button').click();
});

Cypress.Commands.add('editarProduto', (produto) => {
  cy.get('[data-action="edit"]').click()
  cy.contains('#form-title','Editar Produto').should('be.visible')
  // Verifica se o campo 'name' foi fornecido antes de preencher
  if (produto.name) {
    cy.get('[name="name"]').click().clear().type(produto.name);
  }

  if (produto.filamentType) {
    cy.get('[name="filamentType"]').click().clear().type(produto.filamentType);
  }

  if (produto.colors) {
    cy.get('[name="colors"]').click().clear().type(produto.colors);
  }

  if (produto.image) {
 
    cy.get('[name="image"]').selectFile(produto.image, { force: true });
  }

  if (produto.weight) {
    cy.get('[name="weight"]').click().clear().type(produto.weight);
  }

  if (produto.dimensions) {
    cy.get('[name="dimensions"]').click().clear().type(produto.dimensions);
  }

  if (produto.price) {
    cy.get('[name="price"]').click().clear().type(produto.price);
  }

  if (produto.quantity) {
    cy.get('[name="quantity"]').click().clear().type(produto.quantity);
  }

  if (produto.description) {
    cy.get('[name="description"]').click().clear().type(produto.description);
  }

  cy.get('#submit-button').click();
});

Cypress.Commands.add('verificarMensagem', (mensagem) => {
  cy.contains('#form-hint', mensagem).should('be.visible')
})

Cypress.Commands.add('verificarProduto', (produto) => {
  if(produto.name){
    cy.contains(produto.name).should('be.visible')
  }

  if(produto.status){
    cy.contains('.status', produto.status).should('be.visible')
  }
})

Cypress.Commands.add('excluirProduto', () => {
  cy.get('.row-actions > .btn-danger').click()
  cy.get('#confirm-delete').click()
})