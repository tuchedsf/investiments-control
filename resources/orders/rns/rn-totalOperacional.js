/*
  Cálculo Total operacional
  Se for dividendo o total operacional é o preco
  se não total operacional é a quantidade * preco
 */
const totalOperacional = (operacao, quantidade, preco) => {
  
  let totalOperacional = 0
  if (operacao === 'D') {
    totalOperacional = preco;
  } else {
    totalOperacional = quantidade * preco
  }
  return parseFloat(totalOperacional.toFixed(2));
  //return operacao === 'D' ? preco : quantidade * preco
}

module.exports = totalOperacional;