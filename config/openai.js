const { OpenAI } = require('@langchain/openai');
const { HumanMessage } = require('@langchain/core/messages');
const { JsonOutputFunctionsParser } = require('langchain/output_parsers');

const parser = new JsonOutputFunctionsParser();

// Define the function schema
const extractionFunctionSchema = {
  name: 'extractor',
  description: 'Extracts fields from the input.',
  parameters: {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      keywords: { type: 'array', items: { type: 'string' } },
      bullet_1: { type: 'string' },
      bullet_2: { type: 'string' },
      bullet_3: { type: 'string' },
      bullet_4: { type: 'string' },
      bullet_5: { type: 'string' },
    },
  },
};

const model = new OpenAI({
  model: process.env.MODEL_VERSION,
  temperature: parseFloat(process.env.TEMPRETURE),
  apiKey: process.env.OPEN_AI_API_KEY,
});

const runnable = model.bind({
  functions: [extractionFunctionSchema],
});

const callOpenAi = async (text) => {
  const response = await runnable.invoke([new HumanMessage(text)]);
  return response;
};

module.exports = {
  model,
  callOpenAi,
};
