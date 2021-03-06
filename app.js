const Hapi = require('hapi')

const server = new Hapi.Server()

require('./config/db');
const secretKey = require('./config/secret')
//const validate = require('./resources/auth/validateAuth')
const validate = require ('./resources/auth/actions/action-validate-auth')


/**
 * Para desabilitar o teste em algum lugar do codigo utiliza: 
 * $lab:coverage:off$ como comentario... ele ira ignorar o primeiro teste apos o comentario. caso seja um bloco,
 * inclui o comentario $lab:coverage:off$ no inicio e depois $lab:coverage:on$ apos o bloco que nao deve ser testado
 */

/* $lab:coverage:off$ */
server.connection({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  routes: {
      cors: true
  }
})

/**
 * Registra um plugin no hapi no caso o hapi-router que ira tratar todas as
 * rotas do sistema, sendo carregado na linha routes, desta forma nao é
 * necessário importar cada arquivo de rota separadamente.
 * @type {[type]}
 */
const plugins = [
  {
    register: require('hapi-auth-jwt'),
  },
  {
    register: require('hapi-router'),
    options: {
      routes: 'resources/**/routes.js',
    }
  }
]

server.register(plugins, (err) => {
  if (err) {
    throw err;
  }
  server.auth.strategy('token', 'jwt', {
    key: secretKey,
    validateFunc: validate,
    verifyOptions: { algorithms: ['HS256'] }
  }) 

  server.auth.default('token')
  
  server.start((err) => {
    if (err) throw err
    console.log("Servidor startado com sucesso")
  })
})


/* $lab:coverage:on$ */
module.exports = server