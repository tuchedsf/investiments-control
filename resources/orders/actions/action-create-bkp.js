const OrderModel = require('../model/Order')

const Moment = require('moment')
const Joi = require('joi')
const getCurrentDateWithoutTimezone =  Moment().format('YYYY-MM-DDTHH:mm:ss')

//Calculo Mes ano Referencia -> avaliar a necessidade pode-se olhar pela data
const mesAnoRef = (data) => {
  let mesAnoRef = Moment(data).format('YYYY-MM')
  return mesAnoRef
}
const totalOperacional = require('../rns/rn-totalOperacional')
const ganhoPerda = require('../rns/rn-ganhoPerda')
//const estoque = require('../rns/rn-estoque')


const calculaCampos = (order) => {
  
  order.totalOperacional = totalOperacional(order.operacao, order.quantidade, order.preco)
  order.rateio = 0;
  // order.rateio: { type: Number },
  // order.valorLiquido: { type: Number },
  //recupera estoque
  // estoque(order.operacao, order.papel, order.quantidade, function (err, data) { 
  //   console.log('aqui'+ data);
  //   order.estoque = data
  // })
  // console.log(order.estoque)
  // order.precoMedio: { type: Number },
  // order.ganhoPerda: { type: Number },
  // order.IrMes: { type: Number },
  //order.mesRef = mesAnoRef(order.dataOperacao); 
  //order.vendasMes: { type: Number },


  return order;
}

const save = (request, reply) => {
  let order = new OrderModel({
    dataOperacao : request.payload.dataOperacao, 
    papel: request.payload.papel,
    operacao: request.payload.operacao,
    quantidade: request.payload.quantidade,
    preco: request.payload.preco,
    custoTotal: request.payload.custoTotal,
    created_at: getCurrentDateWithoutTimezone,
  })
  //calculaCampos(order);
  //order.estoque = order.retornaDadosUsuario
  console.log(order)
  estoque(order.operacao, order.papel, order.quantidade, function (err, estoque) { 
    console.log('aqui'+ data);
    order.estoque = estoque

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
  })

  
  
}

module.exports = save
