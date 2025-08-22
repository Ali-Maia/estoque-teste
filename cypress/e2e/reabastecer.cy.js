describe('Reabastecer produtos', () => {
    
  beforeEach(() => {
  cy.entrarSite()
  cy.fixture("produtos").then(produtos => {
    const produtoCompleto = {
    name: produtos.valido.name,
    filamentType: produtos.valido.filamentType,
    colors: produtos.valido.colors,
    image: produtos.valido.image,
    weight: produtos.valido.weight,
    dimensions: produtos.valido.dimensions,
    price: produtos.valido.price,
    quantity: produtos.valido.quantity,
    description: produtos.valido.description,
    status: "Disponível"
  }
    cy.cadastrarProduto(produtoCompleto)
    cy.verificarProduto(produtoCompleto)
    })
  })

  it('Reabastecer produto com quantidade maior que zero', () => {
    const produtoReabastecido = {
      quantidadeReabastecida : 10,
      quantidadeEstoque : 20
    }
    cy.reabastecerProduto(produtoReabastecido.quantidadeReabastecida)
    cy.verificarMensagem(`Reabastecimento realizado com sucesso! ${produtoReabastecido.quantidadeReabastecida} unidade(s) adicionada(s) ao estoque.`)
    cy.verificarProduto(produtoReabastecido)
  })

    it('Reabastecer produto com quantidade menor que zero', () => {
    const produtoReabastecido = {
      quantidadeReabastecida : -1,
    }
    cy.reabastecerProduto(produtoReabastecido.quantidadeReabastecida)
    cy.verificarMensagemModal('restock','Informe uma quantidade válida para reabastecimento.')
  })

})