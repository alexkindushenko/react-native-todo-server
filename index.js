const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8888,
  MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/todoDB";

app.use(cookieParser());

const store = new MongoStore({
  collection: "sessions",
  uri: MONGO_URI,
});
app.use(cors());

app.use(
  session({
    secret: "secret key11",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(express.json());
// dev
app.use((req, res, next) => {
  console.log("body---");
  console.log(req.body);

  setTimeout(() => next(), 1000);
});
//-----

app.use("/", require("./routes/home"));
app.use("/group", require("./routes/group"));
app.use("/auth", require("./routes/auth"));

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
