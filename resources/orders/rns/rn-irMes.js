/*
*  Cálculo Imposto Renda Mês 
*  SE OPERACAO VENDA
    SE VALOR VENDIDO FOR MAIOR QUE 20000 E GANHOPERDA > 0
*     IRMES = 0,15 * GANHOPERDA
*   SENAO
*     IRMES = 0;
*SENAO
* NAO TEM IMPOSTO DE RENDA
 */
const irMes = (operacao, totalOperacional, ganhoPerda) => {
  //return operacao === 'V' ? (totalOperacional > 20000 && ganhoPerda > 0 ? Math.round((0.15 * ganhoPerda) * 100) /100 : 0 ) :  0 ;
  let irMes = 0;
  if (operacao === 'V' && totalOperacional > 20000 && ganhoPerda > 0) {
    irMes = (0.15 * ganhoPerda).toFixed(2);
  }else {
    irMes = '0'
  }
  return parseFloat(irMes);
}

module.exports = irMes