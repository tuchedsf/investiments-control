//const OrderModel = require('../model/Order')

const Moment = require('moment')
const Joi = require('joi')
const getCurrentDateWithoutTimezone =  Moment().format('YYYY-MM-DDTHH:mm:ss')

const save = (OrderModel) => {
  return (request, reply) => {
  let order = new OrderModel({
    dataOperacao : request.payload.dataOperacao, 
    papel: request.payload.papel,
    operacao: request.payload.operacao,
    quantidade: request.payload.quantidade,
    preco: request.payload.preco,
    custoTotal: request.payload.custoTotal,
    created_at: getCurrentDateWithoutTimezone,
    //campos a serem calculados
    totalOperacional: 100,
    rateio: 100,
    valorLiquido: 100,
    estoque: 100,
    precoMedio: 100,
    ganhoPerda: 100, 
    irMes: 100,
    vendasMes: 100
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
  
}

module.exports = save
