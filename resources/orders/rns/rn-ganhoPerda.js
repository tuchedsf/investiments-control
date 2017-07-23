/*
  Cálculo Ganho/perda 
  Se for dividendo o ganho/perda é o preco
  se for venda ( V ) = valorLiquido – quantidade * precoMedio
 */
const ganhoPerda = (operacao, quantidade, preco, valorLiquido, precoMedio) => {
  return operacao === 'D' ? preco : (operacao === 'V' ? valorLiquido - quantidade * precoMedio : 0 );
}

module.exports = ganhoPerda