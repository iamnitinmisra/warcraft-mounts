const express = require("express");
const router = express.Router();
const { clientID, redirectURI } = require("../../src/setup");

router.get("/", (req, res) => {
  res.redirect(
    `https://us.battle.net/oauth/authorize?client_id=${clientID}&scope=wow.profile&state=eogiugs987&redirect_uri=${redirectURI}&response_type=code`
  );
});

module.exports = router;
