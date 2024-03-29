const express = require("express");
const mongoose = require("mongoose");
const cookieSesion = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

//this connects the mongo db to the app via mongoose
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(
  cookieSesion({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
