const {response,request} = require('express');
const openAIService = require('../services/openAIService')

async function getDetails(request,response){
    let text = await openAIService.getDetailsUsingOpenAI(request);
    response.send(text);
}

module.exports={
    getDetails
}