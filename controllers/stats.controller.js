const Mutations = require('../models/Mutation');

const statsController = async (req, res) => {

  try {
    // Consulta para traer la cantidad de ADN con mutaciones y sin mutaciones
    const countTrue = await Mutations.countDocuments({ isMutation: true });
    const countFalse = await Mutations.countDocuments({ isMutation: false });

    const ratio = countTrue / countFalse;
    // Dejo esta formula aca la cual considero la correcta para calcular el ratio
    const ratio_aditional = countTrue / (countTrue + countFalse);

    const stats = { count_mutation: countTrue, count_no_mutation: countFalse, ratio, ratio_aditional }; 

    return res.json(stats);
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'Por favor hable con administrador'
    });
  }

  
};

module.exports = statsController;
