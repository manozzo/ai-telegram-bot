
# Ollama Telegram Bot Companion 🌟

Effortlessly bridge the gap between a self-hosted **Llama 3.2 model** and **Telegram** with this powerful Node.js Express application.

**Ollama Telegram Bot Connector** enables users to send HTTP requests to a local Ollama instance and interact with it through a user-friendly Telegram bot. Perfect for creating an AI companion, automating tasks, or experimenting with Llama models in a conversational interface.

---

## ✨ Features

- **AI-Powered Conversations**: Leverage the advanced capabilities of Llama 3.2 for rich, contextual chat interactions.
- **Seamless Telegram Integration**: Connect your AI assistant to Telegram with the Node Telegram Bot API.
- **Flexible Deployment**: Run the application locally or in a server environment.
- **Simple Setup**: Get up and running quickly with an intuitive configuration process.

---

## 🚀 Getting Started

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
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

4. **Start the Application**
   ```bash
   npm start
   ```

---

### Usage

- Open Telegram and start a chat with your bot.
- Send a message, and the bot will interact with your local Ollama instance to generate AI-driven responses.

---

## 🔧 Project Structure

```
📁 src/
├── 📁 routes/
│   └── 📄 chat.js          # Defines routes for handling chat requests
├── 📁 services/
│   └── 📄 ollamaService.js # Handles HTTP requests to the local Ollama instance
├── 📄 server.js            # Main Express server entry point
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
- **Support for Multiple Models**
- **Advanced Configuration Options**

---

## 🌟 Show Your Support

If you find this project helpful, please ⭐ the repository and share it with your network!

---

## 📧 Contact

Have questions or suggestions? Feel free to open an issue or reach out via [LinkedIn](https://linkedin.com/in/manozzo).

---

### Let's build the future of AI, one chat at a time! 🚀

---
