const {model} = require('../config/openai')

const res = model.invoke(
    "What would be a good company name a company that makes colorful socks?"
  );
//   console.log({ res });