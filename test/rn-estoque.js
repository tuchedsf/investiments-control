const estoque = require('../resources/orders/rns/rn-estoque')

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

lab.describe('Teste Estoque', () => {
  var a = 0;
  estoque('C', 'VALE5', 500, function (err, data) {
    var teste = 0;
    if (err) console.log(err)
    //console.log(data.estoque)
    a = data
    return teste
  }) 
  console.log(a)
  //console.log("estoque" + cont);
  // lab.test('Op = "D" - Ganho/Perda igual preco', cb => {
  //   expect(estoque('C','VALE5', 500, 0)).to.be.equal(1000)
  //   cb()
  // })

  // lab.test('Op = "C" - Ganho/Perda = 0', cb => {
  //   expect(ganhoPerda('C',10, 12,10, 10)).to.be.equal(0)
  //   cb()
  // })

  // lab.test('Op = "V" - Ganho/Perda = 0', cb => {
  //   expect(ganhoPerda('V',1000, 21,20982.06, 8.510)).to.be.equal(12472.16)
  //   cb()
  // })
})
