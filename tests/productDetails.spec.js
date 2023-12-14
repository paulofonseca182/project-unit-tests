const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(productDetails('arroz', 'feijao')).toBeInstanceOf(Array);

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('arroz', 'feijao')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const products = productDetails('arroz', 'feijao');
    for (const product of products) {
      expect(product).toBeInstanceOf(Object);
    };

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const product1 = products[0].name;
    const product2 = products[1].name;
    const verify = product1 !== product2 ? true : false;
    expect(verify).toBe(true);

    // Teste se os dois productIds terminam com 123.
    for (const product of products) {
      expect(product.details.productId).toMatch(/(...)$/, '123');
    }
  });
});
