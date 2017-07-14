const Hapi = require('hapi')

const server = new Hapi.Server()

require('./config/db');

server.connection({
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  routes: { cors: true }
})

/**
 * Registra um plugin no hapi no caso o hapi-router que ira tratar todas as
 * rotas do sistema, sendo carregado na linha routes, desta forma nao é
 * necessário importar cada arquivo de rota separadamente.
 * @type {[type]}
 */
server.register({
  register: require('hapi-router'),
  options: {
    routes: 'resources/**/routes.js'
  }
} , function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
  })

server.start((err) => {
  if (err) throw err
  console.log("Servidor startado com sucesso")
})
