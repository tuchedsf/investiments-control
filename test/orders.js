const lab = exports.lab = require('lab').script()
const { expect } = require('code')

lab.describe('Teste orders', () => {
  lab.test('deve retornar com sucesso', cb => {
    expect(true).to.be.true()
    cb()
  })
})
