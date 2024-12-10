require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const { queryOllama } = require("./ollamaService");

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  switch (msg.text) {
    case "/start":
      bot.sendMessage(
        chatId,
        "Welcome to Ollama Bot! Send me a message and I will translate it to Ollama language."
      );
      break;
    case "/help":
      bot.sendMessage(
        chatId,
        "Send me a message and I will translate it to Ollama language using the llama3.2 model with 1 billion parameters. I can make mistakes, double check important infos."
      );
      break;
    default:
      const response = await queryOllama(msg.text);
      bot.sendMessage(chatId, response);
  }
});
