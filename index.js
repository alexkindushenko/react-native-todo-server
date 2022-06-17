console.log("hello from server");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
// const MongoStore = require("connect-mongodb-session")(session);
const cors = require("cors");
// const cookieParser = require('cookie-parser');
// const path = require('path');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8888,
  MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/tTododb";

// const store = new MongoStore({
//   collection: 'sessions',
//   uri: MONGO_URI,
// });
// app.use(cors());

// app.use(cookieParser());
app.use(express.json());
// dev
app.use((req, res, next) => {
  console.log(req.body);
  setTimeout(() => next(), 2000);
});
//-----

app.use("/", require("./routes/home"));
// app.use("/auth", require("./routes/auth"));

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    app.listen(PORT, () => {
      console.log(`Server runing on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);
