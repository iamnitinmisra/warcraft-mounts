const express = require("express");
const router = express.Router();
const request = require("request");
const {
  clientID,
  clientSecret,
  redirectURI,
  clientPort,
} = require("../../src/setup");

router.get("/", (req, res) => {
  // console.log(req.query)
  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: `https://us.battle.net/oauth/token`,
      form: {
        client_id: clientID,
        client_secret: clientSecret,
        code: req.query.code,
        grant_type: "authorization_code",
        redirect_uri: redirectURI,
      },
    },

    // callback
    (error, response, body) => {
      // save token to session
      if (error) console.log("error", error);
      // console.log(JSON.parse(body))
      req.session.token = JSON.parse(body).access_token;
      // redirect to the React App
      res.redirect(`http://localhost:${clientPort}`);
    }
  );
});

module.exports = router;
