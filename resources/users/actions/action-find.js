const OrderModel = require('../model/User')

const find = (req, reply) => {
  OrderModel.find((error, data) => {
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
        statusCode: 200,
        statusText: 'OK'
      }).code(200)
    }
  })
}
//exports.default = find

module.exports = find
