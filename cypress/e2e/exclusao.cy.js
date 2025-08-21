describe('Exclusão de Produtos', () => {
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

  it('Validar que exclusão de produtos é realizado', () => {
      cy.excluirProduto()
      cy.verificarMensagem('Produto excluído com sucesso.')
      cy.contains('td', 'Nenhum produto cadastrado.').should('be.visible')
  });

});