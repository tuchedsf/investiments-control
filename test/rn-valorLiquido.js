const valorLiquido = require('../resources/orders/rns/rn-valorLiquido')

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

lab.describe('Teste Valor Liquido', () => {
  lab.test('Op = "C" - Valor Líquido negativo', cb => {
    expect(valorLiquido('C', 9000, 10.58)).to.be.equal(-9010.58)
    cb()
  })

  lab.test('Op = "V" - Valor Liquido Positivo', cb => {
    expect(valorLiquido('V',21000, 17.94)).to.be.equal(20982.06)
    cb()
  })

  lab.test('Op = "D" - Valor Liquido igual total operacional', cb => {
    expect(valorLiquido('D',52, 0)).to.be.equal(52)
    cb()
  })

})
