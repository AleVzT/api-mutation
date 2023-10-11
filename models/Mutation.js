const { Schema, model } = require('mongoose');

const MutationSchema = Schema({
  dna: {
    type: [String],
    require: [true, 'el dna es obligatorio']
  }, 
  isMutation: {
    type: Boolean,
    require: [true, 'el isMutation es obligatorio']
  },
});

module.exports = model('Mutations',  MutationSchema );
