
const express = require("express");
const app = express();
const router = require("./routes");
const volleyball = require("volleyball");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(volleyball);
app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.listen(8000, () => {
  console.log("listening on PORT "+8000);
});
