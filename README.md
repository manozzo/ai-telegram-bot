# Ollama Telegram Bot Companion 🌟

Effortlessly bridge the gap between a self-hosted **Llama 3.2 model** and **Telegram** with this Node.js application.

**Ollama Telegram Bot Companion** enables users to interact directly with a local Ollama instance via Telegram, using the Node Telegram Bot API. Perfect for creating an AI-powered conversational companion or experimenting with Llama models in a seamless and efficient way.

---

## ✨ Features

- **AI-Powered Conversations**: Leverage the advanced capabilities of Llama 3.2 for rich, contextual chat interactions.
- **Direct Telegram Integration**: No need for a web server—interact directly with Ollama through Telegram.
- **PM2 Support**: Designed to run reliably in production using PM2.
- **Simplified Setup**: Straightforward configuration and deployment.

---

## 🚀 Getting Started

### Prerequisites

Before you start, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [PM2](https://pm2.keymetrics.io/) (for process management)
- [Ollama](https://ollama.com/) (self-hosted Llama 3.2 model)
- [Telegram Bot Token](https://core.telegram.org/bots#creating-a-new-bot)

---

### Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:manozzo/ai-telegram-bot.git
   cd ai-telegram-bot
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the project root and configure it:

   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   ```

4. **Start with PM2**
   Use PM2 to run the bot for improved reliability and monitoring:

   ```bash
   pm2 start src/services/telegramBotService.js --name ai-telegram-bot
   pm2 save
   ```

   To view logs:
   ```bash
   pm2 logs ai-telegram-bot
   ```

---

### Usage

- Open Telegram and start a chat with your bot.
- Send a message, and the bot will interact with your local Ollama instance to generate AI-driven responses.

---

## 🔧 Project Structure

```
📁 src/
├── 📁 services/
│   ├── 📄 ollamaService.js   # Handles interactions with the local Ollama API
│   └── 📄 telegramBotService.js # Telegram bot logic and API integration
```

---

## 🤝 Contributing

Contributions are welcome! If you’d like to improve this project:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## 🛠️ Future Improvements

- **Enhanced Error Handling**
- **Support for Advanced Ollama Features**
- **Scalability Enhancements**

---

## 🌟 Show Your Support

If you find this project helpful, please ⭐ the repository and share it with your network!

---

## 📧 Contact

Have questions or suggestions? Feel free to open an issue or reach out via [LinkedIn](https://linkedin.com/in/manozzo).

---

### Let's build the future of AI, one chat at a time! 🚀

---