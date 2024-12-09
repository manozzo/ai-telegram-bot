const axios = require("axios");

const OLLAMA_API_URL = "http://localhost:11434/api/generate";

async function queryOllama(message) {
  try {
    const response = await axios.post(OLLAMA_API_URL, {
      model: "llama3.2:1b",
      prompt: message,
      stream: false,
    });
    const respData = response.data.response.toString();
    return respData;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

module.exports = { queryOllama };
