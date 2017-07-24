const irMes = require('../resources/orders/rns/rn-irMes')

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

lab.describe('Teste IR Mês', () => {
  lab.test('Op = "D" - IR = 0', cb => {
    expect(irMes('D', 10, 12)).to.be.equal(0)
    cb()
  })

  lab.test('Op = "C" - IR = 0', cb => {
    expect(irMes('C',10, 10)).to.be.equal(0)
    cb()
  })

  lab.test('Op = "V" - Venda menor que 20000 = 0', cb => {
    expect(irMes('V',10000, 5000)).to.be.equal(0)
    cb()
  })

  lab.test('Op = "V" - Venda maior que 20000 = 0', cb => {
    expect(irMes('V',21000, 12472.16)).to.be.equal(1870.82)
    cb()
  })
})
