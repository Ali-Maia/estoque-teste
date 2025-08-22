describe('Comprar produto', () => {
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

  it('Comprar produto com quantidade inteira maior que zero deve permitir a compra do produto no sistema', () => {
    const produtoComprado = {
      quantidadeComprada : 6,
      quantidadeEstoque : 4,
      status: 'Disponível'
    }

    cy.comprarProduto(produtoComprado)
    cy.verificarMensagem(`Compra realizada com sucesso! ${produtoComprado.quantidadeComprada} unidade(s) removida(s) do estoque.`)
    cy.verificarProduto(produtoComprado.status)
    
  })

  it('Comprar produto com quantidade igual a quantidade em estoque deve permitir a compra do produto no sistema', () => {
    const produtoComprado = {
      quantidadeComprada : 10,
      quantidadeEstoque : 0,
      status: 'Indisponível'
    }

    cy.comprarProduto(produtoComprado)
    cy.verificarProduto(produtoComprado)
    cy.verificarMensagem(`Compra realizada com sucesso! ${produtoComprado.quantidadeComprada} unidade(s) removida(s) do estoque.`)
  })

  it('Comprar produto com quantidade superior a quantidade em estoque  não deve permitir a compra do produto no sistema', () => {
    const produtoComprado = {
      quantidadeComprada : 11,
      status: 'Disponível'
    }

    cy.comprarProduto(produtoComprado)
    cy.verificarProduto(produtoComprado)
    cy.verificarMensagemModal('buy','Quantidade em estoque insuficiente.')
  })

    it('Comprar produto com quantidade inferior a zero não deve permitir a compra do produto no sistema', () => {
    const produtoComprado = {
      quantidadeComprada : -1,
      status: 'Disponível'
    }

    cy.comprarProduto(produtoComprado)
    cy.verificarProduto(produtoComprado)
    cy.verificarMensagemModal('buy','Informe uma quantidade válida para compra.')
  })

})