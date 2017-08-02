const Moment = require('moment')
const Joi = require('joi')
const jwt = require('jsonwebtoken');

const secretKey = require('../../../config/secret')

const getCurrentDateWithoutTimezone = Moment().format('YYYY-MM-DDTHH:mm:ss')


const login = (UserModel) => {
  return (request, reply) => {
    console.log(request.payload)
    if (request.payload.email == '' || request.payload.password == '' || request.payload.password == ' ') {
      reply({
        error: true,
        data: 'Obrigatório informar usuário/senha!',
        statusCode: 403,
        statusText: 'NOK',
      }).code(403)
    }
    //Realiza busca usuario no banco
    UserModel.findOne({
      email: request.payload.email
    }, function (err, user) {
      if (err || user == null) {
        return reply({
          error: true,
          data: 'Usuário não encontrado',
          statusCode: 403,
          statusText: 'NOK',
        }).code(403)
      }

      //chama method de verificar senha informada é igual a salva no banco.
      user.verificaSenha(request.payload.password, function (isMatch) {
        if (!isMatch) {
          console.log('dentro verifica senha');
          return reply({
            error: true,
            data: 'Senha Inválida',
            statusCode: 403,
            statusText: 'NOK',
          }).code(403)
        }
        //3
        const expires = Moment().add(1, 'days').valueOf(); //atribui a expires uma data de expiraçao (moment pega a hora e momento atual e adiciona 1 dia)

        //gera o token com as credenciais do login.
        const token = jwt.sign({
          iss: user.id,
          exp: expires,
          scope: user.perfis
        }, secretKey);

        //devolve o token para a requisiçao.
        const retorno = {
          token: token,
          expires: expires,
          //user: user.toJSON()
          user: {
            username: user.username,
            email: user.email,
            perfis: user.perfis
          }
        }

       return reply({
          error: false,
          data: retorno,
          message: 'Login efetuado com sucesso!',
          statusCode: 201,
          statusText: 'OK'
        }).code(201)
      });
    })
  }
}

module.exports = login