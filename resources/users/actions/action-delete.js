const OrderModel = require('../model/Order')

const remove = (request, reply) => {
    const _id = { _id: request.params.id }
    OrderModel.remove(_id, (error, data) => {
      if (error) {
        reply({
          error: true,
          data: error,
          statusCode: 401,
          statusText: 'NOK',
        }).code(401)
      } else {
        reply({
          error: false,
          data: data,
          message: 'Ordem deletada com sucesso!',
          statusCode: 200,
          statusText: 'OK'
        }).code(200)
      }
    })
  }

module.exports = remove