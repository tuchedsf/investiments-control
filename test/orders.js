const CONSTANTS =  require('../resources/helpers/constants')
const handleFind = require('../resources/orders/actions/action-find')

const URI =  `${CONSTANTS.URI}/orders`

const lab = exports.lab = require('lab').script()
const { expect } = require('code')

const server = require('../app.js')

lab.describe('Teste orders', () => {
  lab.test('deve retornar com sucesso', cb => {
    expect(true).to.be.true()
    cb()
  })

  // lab.test('deve retornar com sucesso', () => {
  //   return server.inject({
  //     method: 'GET',
  //     url: URI,
  //     handler: handleFind
  //   }).then(res => {
  //     expect(res.statusCode).to.be.equal(200)

  //   })
  // })

  lab.test('deve retornar com sucesso', async () => {
    const res = await server.inject({
      method: 'GET',
      url: URI
    })
      expect(res.statusCode).to.be.equal(200)
    
  })
})

lab.describe('Teste orders', () => {
  
})

