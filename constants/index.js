const getPrompt = (
  title,
  description
) => `Refine and enhance the following product details. Make it more attractive and fancy based on the provided title and description, description should be up to 500 words minimum. Reference any similar products available on Amazon if applicable. Provide a JSON object with the following fields: title, description, keywords, bullet_1, bullet_2, bullet_3, bullet_4, bullet_5.
Title: ${title}
Description: ${description}`;

module.exports = {
  getPrompt,
};
