const OrderModel = require('../model/Order')

const update = (request, reply) => {
  const _id = request.params.id
  const order = request.payload

  OrderModel.findById({_id}).then(data => {
    OrderModel.update(_id, order, { multi: false }, (error, data) => {
        if (error) {
          reply({
            error: true,
            data: error,
            statusCode: 401,
            statusText: 'NOK'
          }).code(401)
        } else {
          console.log(data)
          reply({
            error: false,
            data: data,
            message: 'Ordem editada com sucesso!',
            statusCode: 204,
            statusText: 'OK'
          }).code(200)
        }
    })
  }).catch(err => {
    reply({
      error: true,
      data: err,
      statusCode: 401,
      statusText: 'NOK'
    }).code(401)
  })  
}

module.exports = update