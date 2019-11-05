const mongoose = require('mongoose');

const ApresentacaoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true,
    unique: true
  },
  path: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = Apresentacao = mongoose.model(
  'apresentacao',
  ApresentacaoSchema
);
