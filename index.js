const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/config");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.json("Hello Node!");
});

const vehicleApi = require("./src/api/vehicle.api");
app.use("/vehicle", vehicleApi());



app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});