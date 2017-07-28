/**
 * ESTOQUE
-------
total da quantidade do papel na carteira ATÉ O MOMENTO DA ORDEM... OU SEJA O ESTOQUE DEVE SER PARA CADA ORDEM.
Ex. ppetr4 comprou 1000
estoque 1000
comprou mais 1000
estoque 2000
vendeu 500
estoque 1500.
//recuperar a ultima ordem do papel
  //se for compra estoque = estoque ultima + quantidade atual
  //se for venda estoque = estoque ultima - quantidade atual
 */
const OrderModel = require('../model/Order')


const order =  (papel) => {
    OrderModel.find({papel: papel}).sort({_id: -1}).limit(1)
    .then(data => {
      console.log(data)
       return data;
    })
}

// module.exports = function  (operacao, papel, quantidade, callback) {
  
//   OrderModel.find({ papel: papel }, function (err, data) {
//     if (err) callback(err, null)
//     console.log(data)
//     let estoque = 0 
//    // console.log(data.length)
//     if (data.length > 0) {
//       if (data[0].estoque === undefined || Number.isNaN(data[0].estoque)) {
//         estoque = quantidade
//       }
//      // console.log(data[0].estoque)
//      // console.log(operacao)
//       if (operacao === 'C') {
//         estoque =  data[0].estoque + quantidade
//       }
//       if (operacao === 'V') {
//         estoque = data[0].estoque - quantidade
//       }
//     } else {
//        estoque = quantidade;
//     }
//     callback(null, estoque)
//   }).sort({ _id: -1 }).limit(1)
// }

module.exports = order
