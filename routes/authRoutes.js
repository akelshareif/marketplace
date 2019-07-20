const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // this is still waiting for code to tell it what to do when a user is authenticated w/ req,res=>{} fxn 
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current-user", (req, res) => {
    res.send(req.user);
  });
};
