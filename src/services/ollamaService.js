const axios = require("axios");

const apiUrl = "http://localhost:11434/api/generate";

async function queryOllama(message) {
  try {
    const response = await axios.post(apiUrl, {
      model: "llama3.2:1b",
      prompt: message,
      stream: false,
    });
    const respData = response.data.response.toString();
    return respData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to query Ollama");
  }
}

module.exports = { queryOllama };
