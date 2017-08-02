const OrderModel = require('../model/Order')

const findById = (req, reply) => {
  OrderModel.findById(req.params.id, (error, data) => {
        if (error) {
          reply({
            error: true,
            data: error,
            statusCode: 401,
            statusText: 'NOK'
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

module.exports = findById