const ganhoPerda = require('../resources/orders/rns/rn-ganhoPerda')

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

lab.describe('Teste Ganho/Perda', () => {
  lab.test('Op = "D" - Ganho/Perda igual preco', cb => {
    expect(ganhoPerda('D', 200, 12,  2400, 12.010)).to.be.equal(12)
    cb()
  })

  lab.test('Op = "C" - Ganho/Perda = 0', cb => {
    expect(ganhoPerda('C',10, 12,10, 10)).to.be.equal(0)
    cb()
  })

  lab.test('Op = "V" - Ganho/Perda = 0', cb => {
    expect(ganhoPerda('V',1000, 21,20982.06, 8.510)).to.be.equal(12472.16)
    cb()
  })
})
