const express = new require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./importData");
const PORT = 5000;
const router = require("./Routes");

const username = "mansisingla802";
const password = "FOwXmG59KNBUpqpf";
const databaseName = "Mobilicis";

const DB =
  "mongodb+srv://mansisingla802:" +
  password +
  "@cluster0.abx5cpp.mongodb.net/" +
  databaseName +
  "?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
