/**
 * VALORLIQUIDO
------------
SE OPERACAO FOR COMPRA:
                VALORLIQUIDO = - (TOTALOPERACIONAL + RATEIO);
SENÃO SE FOR VENDA
                VALORLIQUIDO = TOTALOPERACIONAL - RATEIO;
SENÃO
                VALORLIQUIDO = TOTALOPERACAO;
 */

const valorLiquido = (operacao, totalOperacional, rateio) => {
  return operacao === 'C' ? - (totalOperacional + rateio) : (operacao === 'V' ? totalOperacional - rateio : totalOperacional)
}
 
module.exports = valorLiquido