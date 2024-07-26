const getPrompt = (
  data
) => `Refine and enhance the following product details. Make it more attractive and fancy based on data. Reference any similar products available on Amazon if applicable. Provide a JSON object with the following fields: title, description, keywords, bullet_1, bullet_2, bullet_3, bullet_4, bullet_5. description should be up to 500 words minimum
Data: ${data}`;

module.exports = {
  getPrompt,
};
