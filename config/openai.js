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
      title: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
    },
  },
};

const model = new OpenAI({
  model: 'gpt-4',
  // maxTokens: 128,
  temperature: 0.9,
  apiKey: process.env.OPEN_API_API_KEY,
});
// .bind({
//   response_format: {
//     type: 'json_object',
//   },
// });

const runnable = model.bind({
  // functions: [extractionFunctionSchema],
  // function_call: { name: 'extractor' },
});
// .pipe(parser);

// Invoke the runnable with an input
const callOpenAi = (text) => runnable.invoke([new HumanMessage(text)]);

module.exports = {
  model,
  callOpenAi,
};
