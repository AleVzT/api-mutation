/* 
    Rutas de stats
    host + /stats
*/

const { Router } = require('express');
const router = Router();

const statsController = require('../controllers/stats.controller');

router.get('/stats', statsController);

module.exports = router;
