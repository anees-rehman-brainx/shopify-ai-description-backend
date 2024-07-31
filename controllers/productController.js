const { openai } = require('../config');
const { prompt, getPrompt } = require('../constants');

const productDescription = async (req, res) => {

  try {

    let {what_to_generate} = req.body;

    if(!what_to_generate || !what_to_generate?.length > 0){
      what_to_generate = ['title']
    }

    const response = await openai.callOpenAi(
      getPrompt(JSON.stringify(req.body.product), what_to_generate)
    );

    
    let jsonResponse;

    let sanitizedResponse = response;
    
    if (typeof response === 'string') {
      sanitizedResponse = response?.replace(/,\s*}([\s\n]*)$/, '}');
      sanitizedResponse = sanitizedResponse?.replace(/,\s*](\s*)$/, ']');
      
      try {
        jsonResponse = JSON.parse(sanitizedResponse);
      
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        return res.status(500).send({
          error: 'Failed to parse the response from OpenAI.',
        });
      }
    } else {
      jsonResponse = response;
    }    

    return res.status(200).json(jsonResponse);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).send({
      error: error?.message ? error?.message : 'Something went wrong',
    });
  }
};

module.exports = {
  productDescription,
};
