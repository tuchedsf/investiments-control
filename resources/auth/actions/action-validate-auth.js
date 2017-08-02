const UserModel = require('../../users/model/User')

const validate = function (request, decodedToken, callback) {

  console.log(decodedToken);

  if (decodedToken.exp <= Date.now()) { //verifica se o token esta expirado.
    return callback(null, false);
  }

  UserModel.findOne({ "_id": decodedToken.iss }, function (err, user) {
    if (err) return callback(null, false);
    request.user = user
    return callback(null, true, user);
  });
};

module.exports = validate;