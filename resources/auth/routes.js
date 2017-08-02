const CONSTANTS = require('../helpers/constants')

const URI = `${CONSTANTS.URI}/auth`

const UserModel = require('../../resources/users/model/User')

const Joi = require('joi')

const actionLogin = require('./actions/action-login')(UserModel)

// const getCurrentDateWithoutTimezone = Moment().format('YYYY-MM-DDTHH:mm:ss')

const routes = [
  // POST OBJECT
  {
    method: 'POST',
    path: URI + '/login',
    handler: actionLogin,
    config: {
      validate: {
        payload: {
          email: Joi.string().required(),
          password: Joi.string().required()
        }
      },
      auth: false
    }
  },
]

module.exports = routes
