const express = require("express");
const auth = require("./controllers/auth");
const bets = require("./controllers/bet");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post("/auth/login", auth.login);
app.post("/auth/register", auth.register);
app.post("/bets/bet", bets.create);

app.listen(port, () =>
  console.log(`Project running at: http://localhost:${port}`)
);
