const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { fieldsValidators } = require('../middlewares/fields-validators');
const mutationController = require('../controllers/mutation.controller');

router.post(
    '/mutation/',
    [ 
        check('dna', 'El dna es obligatorio').not().isEmpty(),
        fieldsValidators,
    ],
    mutationController
);

module.exports = router;