const CONSTANTS =  require('../helpers/constants')

const URI =  `${CONSTANTS.URI}/orders`

const OrderModel = require('./model/Order')

const Moment = require('moment')
const Joi = require('joi')

const handleFind = require('./actions/action-find')

const getCurrentDateWithoutTimezone =  Moment().format('YYYY-MM-DDTHH:mm:ss')

const routes = [
//GET ALL Orders
  {
		method: 'GET',
		path: URI,
		handler: handleFind
	},
  //GET ONE Order
  {
    method: 'GET',
      path: URI + `/{id}`,
      handler: (req, reply) => {
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
    },
    config: {
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  },
  // POST OBJECT
  {
	method: 'POST',
	path: URI,
	handler: (request, reply) => {
		const order = new OrderModel({
      dataOperacao : request.payload.dataOperacao, 
      papel: request.payload.papel,
      operacao: request.payload.operacao,
      quantidade: request.payload.quantidade,
      preco: request.payload.preco,
      custoTotal: request.payload.custoTotal,
		  created_at: getCurrentDateWithoutTimezone
		})

		order.save((error, data) => {
			if (error) {
				if (error.index == 0) {
					reply({
						error: true,
						data: 'Já existe uma ordem registrada!',
						statusCode: 403,
						statusText: 'NOK',
					}).code(403)
				} else {
					reply({
						error: true,
						data: error,
						statusCode: 401,
						statusText: 'NOK',
					})
				}
			} else {
				reply({
					error: false,
					data: data,
					message: 'Nova ordem cadastrado com sucesso!',
					statusCode: 201,
					statusText: 'OK'
				}).code(201)
			}
		})
	}
},
// PUT OBJECT
{
method: 'PUT',
path: URI + `/{id}`,
handler: (req, reply) => {
  const _id = { _id: req.params.id }

  console.log(req.payload);
  const order = new OrderModel({
      dataOperacao : request.payload.dataOperacao, 
      papel: request.payload.papel,
      operacao: request.payload.operacao,
      quantidade: request.payload.quantidade,
      preco: request.payload.preco,
      custoTotal: request.payload.custoTotal,
      created_at: getCurrentDateWithoutTimezone
    })

  OrderModel.update(_id, system, { multi: false }, (error, data) => {
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
  }
},
// Delete a categorie by id
{
	method: 'DELETE',
	path: URI + `/{id}`,
	handler: (request, reply) => {
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
}
]

module.exports = routes
