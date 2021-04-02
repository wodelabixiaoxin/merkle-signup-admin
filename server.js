const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

dotenv.config();
mongoose.connect(process.env.MONGODB_URI||process.env.DATABASE_ACCESS, () =>
  console.log("Database Connected")
);
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};
app.use("/app", routesUrls);
app.listen(PORT, () => console.log("server is up and running"));
