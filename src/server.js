const express = require("express");
const chatRoute = require("./routes/chat");
const app = express();

app.use(express.json());
app.use("/chat", chatRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
