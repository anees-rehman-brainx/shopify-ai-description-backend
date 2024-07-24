const { OpenAI } = require("@langchain/openai") ;

const model = new OpenAI({
  model: "gpt-3.5-turbo-instruct", // Defaults to "gpt-3.5-turbo-instruct" if no model provided.
  temperature: 0.9,
  apiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.OPENAI_API_KEY
});

module.exports = {
    model
}
