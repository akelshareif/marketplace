const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ userID: profile.id, userName: profile.displayName });
      if (existingUser) {
        //current user exists - do not make a new record
        done(null, existingUser);
      } else {
        //make new user with given googleID
        const user = await new User({ userID: profile.id, userName: profile.displayName }).save();
        done(null, user);
      }
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
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ userID: profile.id, userName: profile.displayName });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ userID: profile.id, userName: profile.displayName }).save();
        done(null, user);
      }
    }
  )
);

// Add local strategy
passport.use(
  new LocalStrategy(
    async (username, password, done) => {
      const existingUser = await User.findOne({ userEmail: username });
      if(existingUser){
        return done(null, existingUser);
      } else if(!existingUser || !existingUser.validPassword(password)) {
        return done(null, false, { message: 'Incorrect Email or Password'});
      }
    }
  )
);