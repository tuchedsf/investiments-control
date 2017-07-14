const mongoose = require('mongoose')

const Schema = mongoose.Schema

const _schema = {
  dataOperacao : Date, 
  papel: { type: String, required: true },
  operacao: { type: String, required: true  },
  quantidade: { type: Number, required: true  },
  preco: { type: Number, required: true  },
  custoTotal: { type: Number, required: true  },
  totalOperacional: { type: Number },
  rateio: { type: Number },
  valorLiquido: { type: Number },
  estoque:{ type: Number },
  precoMedio: { type: Number },
  ganhoPerda: { type: Number },
  IrMes: { type: Number },
  mesRef: Date, 
  vendasMes: { type: Number },
	created_at: Date,
	updated_at: Date
}

const OrderSchema = new Schema(_schema)

const Model = mongoose.model('Orders', OrderSchema)

module.exports = Model
