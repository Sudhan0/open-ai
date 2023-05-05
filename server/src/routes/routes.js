const router = require('express').Router();
const openAIController = require('../controllers/openAIController')
router.post('/getDetails',openAIController.getDetails);

module.exports=router;