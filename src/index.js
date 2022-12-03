const express = require("express");
const auth = require("./controllers/auth");
const bets = require("./controllers/bet");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.get("/auth/login", auth.login);
app.post("/auth/register", auth.register);
app.post("/bets/bet", bets.create);

app.listen(PORT, () =>
  console.log(`Project running at: http://localhost:${PORT}`)
);
