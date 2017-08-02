const CONSTANTS =  require('../helpers/constants')

const URI =  `${CONSTANTS.URI}/orders`

const OrderModel = require('./model/Order')

const Moment = require('moment')
const Joi = require('joi')

const actionFind = require('./actions/action-find')
const actionFindById = require('./actions/action-findById')
const actionUpdate = require('./actions/action-update')
const actionDelete = require('./actions/action-delete')
const actionCreate = require('./actions/action-create')(OrderModel)

const getCurrentDateWithoutTimezone =  Moment().format('YYYY-MM-DDTHH:mm:ss')

const routes = [
//GET ALL Orders
  {
		method: 'GET',
		path: URI,
    handler: actionFind
    // config: {
    //   auth: false
    // }
	},
  //GET ONE Order
  {
    method: 'GET',
      path: URI + `/{id}`,
      handler: actionFindById,
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
  	handler: actionCreate 
  },
// PUT OBJECT
{
  method: 'PUT',
  path: URI + `/{id}`,
  handler: actionUpdate,
  config: {
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
},
// Delete a categorie by id
{
	method: 'DELETE',
	path: URI + `/{id}`,
	handler: actionDelete,
  config: {
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
}
]

module.exports = routes
