describe('Edição de Produtos', () => {

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
    
  it('Edição de produto com dados válidos deve permitir editar produto no sistema', () => {
    cy.fixture("produtos").then(produtos => {
      const produtoEditado = {
        name: produtos.valido2.name,
        filamentType: produtos.valido2.filamentType,
        colors: produtos.valido2.colors,
        image: produtos.valido2.image,
        weight: produtos.valido2.weight,
        dimensions: produtos.valido2.dimensions,
        price: produtos.valido2.price,
        quantity: produtos.valido2.quantity,
        description: produtos.valido2.description,
        status: "Disponível"
      }
      cy.editarProduto(produtoEditado)
      cy.verificarProduto(produtoEditado)
    })
  })
  
    it('Edição de produto com dados válidos deve permitir editar produto no sistema', () => {
    cy.fixture("produtos").then(produtos => {
      const produtoOriginal = {name:produtos.valido.name}
      const produtoEditado = {
        name: produtos.valido2.name,
        filamentType: produtos.valido2.filamentType,
        colors: produtos.valido2.colors,
        image: produtos.valido2.image,
        weight: produtos.valido2.weight,
        dimensions: produtos.valido2.dimensions,
        price: -1,
        quantity: produtos.valido2.quantity,
        description: produtos.valido2.description,
        status: "Disponível"
      }
      cy.editarProduto(produtoEditado)
      cy.verificarMensagem('Preço deve ser um número maior ou igual a zero (R$).')
      cy.verificarProduto(produtoOriginal)
    })
  })

})