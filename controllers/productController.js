const { openai } = require('../config');

const productDescription = async (req, res) => {
  try {
    const { title, description, type } = req.body;

    let prompt;
    if (type === 'title') {
      prompt = `Refine and enhance the following title for a product description. Make it more attractive and fancy based on the provided description. Reference any similar products available on Amazon if applicable. Return the result in JSON format with the key "refinedTitle".\n\nTitle: ${title}\nDescription: ${description}`;
    } else if (type === 'description') {
      prompt = `Refine and enhance the following product description. Make it more attractive and fancy based on the provided title and description, take reference on Amazon if applicable. Title: ${title} Description: ${description}`;
    } else {
      return res.status(400).send({
        error:
          "Invalid type provided. It should be either 'title' or 'description'.",
      });
    }

    const response = await openai.callOpenAi(prompt);

    console.log(response);

    return res.status(200).json(response);
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
