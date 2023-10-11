const { getMutation } = require("../helpers/getMutation");
const Mutations = require('../models/Mutation');

const mutationController = async (req, res) => {
  try {
    const dna = req.body.dna;

    if(!dna) res.status(403).send('Forbidden')

    const mutacionDetectada = getMutation(dna);
  
    // Se busca si existe en la base de datos el dna ingresado
    let mutacion = await Mutations.findOne({ dna });
  
    // Se guarda el Adn si no existe
    if ( !mutacion ) {
      const mutation = new Mutations({
        dna,
        isMutation: mutacionDetectada
      });
      await mutation.save();
    }
  
    if(mutacionDetectada) {
      return res.status(200).send('OK');
    } else {
      return res.status(403).send('Forbidden')
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'Por favor hable con administrador'
    });
  }
};

module.exports = mutationController;
