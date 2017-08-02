//const UserModel = require('../model/Order')

const Moment = require('moment')
const Joi = require('joi')
const getCurrentDateWithoutTimezone =  Moment().format('YYYY-MM-DDTHH:mm:ss')

const save = (UserModel) => {
  return (request, reply) => {
  let user = new UserModel({
    email: request.payload.email,
    username: request.payload.username,
    password: request.payload.password,
    admin: request.payload.admin,
    perfis: [request.payload.perfis],
    created_at: getCurrentDateWithoutTimezone,
  })
  
  user.save((error, data) => {
    if (error) {
      if (error.index == 0) {
        reply({
          error: true,
          data: 'Já existe uma usuario registrada!',
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
        message: 'Novo usuario cadastrado com sucesso!',
        statusCode: 201,
        statusText: 'OK'
      }).code(201)
    }
  })
  }
  
}

module.exports = save
