const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../../src/setup");

const namespace = 'profile-us'
const region = 'us'
const locale = 'en-US'

router.get("/", (req, res) => {
  // token in session -> get user data and send it back to the react app
  if (req.session.token) {
    request(
      // GET request to user mounts collection endpoint
      {
        method: "GET",
        uri: `https://us.api.blizzard.com/profile/user/wow/collections/mounts?namespace=${namespace}&locale=${locale}&access_token=${req.session.token}`
      },

      // callback
      (error, response, body) => {
        let mounts = JSON.parse(body)
        // console.log(mounts)
        res.send( 
          // token: {
            mounts
          // },
        );
      }
    );
  }

  // no token -> send nothing
  else {
    res.send({});
  }
});

module.exports = router;
