const totalOperacional = require('../resources/orders/rns/rn-totalOperacional')

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

lab.describe('Teste Total Operacional', () => {
  lab.test('Op = "D" - Total Operacional igual preco', cb => {
    expect(totalOperacional('D',0,10)).to.be.equal(10)
    cb()
  })

  lab.test('Op = "C" - Total Operacional igual preco x quantidade', cb => {
    expect(totalOperacional('C',10,10)).to.be.equal(100)
    cb()
  })
})
