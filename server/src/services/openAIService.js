const openai = require('../configuration/openAIConfig');
const responseBuilder = require('../helper/responseBuilder')

async function getDetailsUsingOpenAI(req){
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.text,
        max_tokens: 3000,
        n: 1,
        temperature: 0.2,
        presence_penalty: 0.8,
        frequency_penalty: 0.7

    });
    return responseBuilder.success(completion.data.choices[0].text);
}

module.exports={
    getDetailsUsingOpenAI
}