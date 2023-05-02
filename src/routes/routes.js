const router = require('express').Router();
const openAIController = require('../controllers/openAIController')
router.get('/getDetails',openAIController.getDetails);

module.exports=router;