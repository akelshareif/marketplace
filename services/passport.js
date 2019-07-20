const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //user refers to the mongodb user fetched/created
  //the id refers to the mongodb id of that user
  //this turns a mongo model into an id
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //this turns an id into a mongo model
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ userID: profile.id })
        // existingUser is then name given
        .then(existingUser => {
          if (existingUser) {
            //current user exists - do not make a new record
            done(null, existingUser);
          } else {
            //make new user with given googleID
            new User({
              userID: profile.id
            })
              .save()
              .then(user => done(null, user));
          }
        });
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ userID: profile.id })
        // existingUser is then name given
        .then(existingUser => {
          if (existingUser) {
            //current user exists - do not make a new record
            done(null, existingUser);
          } else {
            //make new user with given googleID
            new User({
              userID: profile.id
            })
              .save()
              .then(user => done(null, user));
          }
        });
    }
  )
);
