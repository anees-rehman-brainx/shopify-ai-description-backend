
const getPrompt = (data, whatToGenerate) => {
  const fields = whatToGenerate?.join(", ");

  const descriptionNote = whatToGenerate?.includes('description') 
      ? "description should be up to 500 words minimum" 
      : "";

  return `Refine and enhance the following product details. Make it more attractive and fancy based on data. Reference any similar products available on Amazon if applicable. Only provide a JSON object with the following fields: ${fields} ${descriptionNote ? ", " + descriptionNote : ""}. Data: ${data}`;
};

module.exports = {
  getPrompt,
};
