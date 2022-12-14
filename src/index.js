const express = require("express");
// const serverless = require("serverless-http");
const cors = require("cors");
const auth = require("./controllers/auth");
const bets = require("./controllers/bet");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(
  cors({
    origin: "*",
  })
);
app.post("/auth/login", auth.login);
app.post("/auth/register", auth.register);
app.post("/bets/bet", bets.create);

app.get("/", function (req, res) {
  res.send("You are in!");
});

app.listen(PORT, () =>
  console.log(`Project running at: http://localhost:${PORT}!`)
);
