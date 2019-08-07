const passport = require("passport");

module.exports = app => {
  //Google Auth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google"),
    (req, res) => res.redirect('/')
  );

  //Facebook Auth
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback", passport.authenticate("facebook"),
    (req, res) => res.redirect('/')
  );

  //Local Auth
  app.post('/login', passport.authenticate("local", {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

  //General Logout and Current User Routes
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get("/api/current-user", (req, res) => {
    res.send(req.user);
  });
};
