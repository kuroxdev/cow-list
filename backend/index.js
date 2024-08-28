const express = require("express");
const Router = require("./routes/routes");
require("dotenv").config();
require("./config/dbConfig");
require("./models/index");

const cors = require("cors");
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
