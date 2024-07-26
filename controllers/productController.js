const { openai } = require('../config');
const { prompt, getPrompt } = require('../constants');

const productDescription = async (req, res) => {
  try {
    const response = await openai.callOpenAi(
      getPrompt(JSON.stringify(req.body))
    );

    let jsonResponse;
    if (typeof response === 'string') {
      try {
        jsonResponse = JSON.parse(response);
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
