
describe('Cadastro', () => {
  beforeEach(() => {
    cy.entrarSite()
  });
  it('Cadastro de produto com dados válidos deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoCompleto = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: produtos.valido.weight,
        dimensions: produtos.valido.dimensions,
        price: produtos.valido.price,
        quantity: produtos.valido.quantity,
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoCompleto)

      cy.contains(produtoCompleto.name).should('be.visible')
      cy.contains('.status', 'Disponível').should('be.visible')
    })
  });

  it('Cadastro de produto com dados faltantes não deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoSimples = {
        weight: produtos.valido.weight,
        price: produtos.valido.price,
        quantity: produtos.valido.quantity,
      }

      cy.cadastrarProduto(produtoSimples)
    })

    cy.verificarMensagemErro('Campos obrigatórios: Nome, Tipo de filamento, Cores, Dimensões, Descrição.')
  });

  it('Cadastro de produto com peso menor que zero não deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoCompleto = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: -1,
        dimensions: produtos.valido.dimensions,
        price: produtos.valido.price,
        quantity: produtos.valido.quantity,
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoCompleto)
    })
    cy.verificarMensagemErro('Peso deve ser um número maior ou igual a zero (g).')
  })

  it('Cadastro de produto sem quantidade inicial não deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoSemQuantidade = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: produtos.valido.weight,
        dimensions: produtos.valido.dimensions,
        price: produtos.valido.price,
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoSemQuantidade)

      cy.verificarMensagemErro('Quantidade deve ser um inteiro maior ou igual a zero.')
    })
  })

    it('Cadastro de produto com quantidade inicial igual a zero deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoCompleto = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: produtos.valido.weight,
        dimensions: produtos.valido.dimensions,
        price: produtos.valido.price,
        quantity: "0",
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoCompleto)

      cy.contains(produtoCompleto.name).should('be.visible')
      cy.contains('.status', 'Indisponível').should('be.visible')
    })
  })

    it('Cadastro de produto com quantidade inicial inferior a zero não deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoSemQuantidade = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: produtos.valido.weight,
        dimensions: produtos.valido.dimensions,
        price: produtos.valido.price,
        quantity: -1,
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoSemQuantidade)

      cy.verificarMensagemErro('Quantidade deve ser um inteiro maior ou igual a zero.')
    })
  })

    it('Cadastro de produto com preço inferior a zero não deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoSemPreco = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: produtos.valido.weight,
        dimensions: produtos.valido.dimensions,
        price: -1,
        quantity: produtos.valido.quantity,
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoSemPreco)

      cy.verificarMensagemErro('Preço deve ser um número maior ou igual a zero (R$).')
    })
  })

  it('Cadastro de produto com preço com valor não numérico não deve permitir adicionar produto ao sistema', () => {
    cy.fixture('produtos').then(produtos => {
      const produtoSemPreco = {
        name: produtos.valido.name,
        filamentType: produtos.valido.filamentType,
        colors: produtos.valido.colors,
        image: produtos.valido.image,
        weight: produtos.valido.weight,
        dimensions: produtos.valido.dimensions,
        price: "dez",
        quantity: produtos.valido.quantity,
        description: produtos.valido.description
      }

      cy.cadastrarProduto(produtoSemPreco)

      cy.verificarMensagemErro('Preço deve ser um número maior ou igual a zero (R$).')
    })
  })

});



