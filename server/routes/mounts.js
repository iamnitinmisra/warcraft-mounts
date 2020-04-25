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
      // POST request to /introspect endpoint
      {
        method: "GET",
        uri: `https://us.api.blizzard.com/profile/user/wow/collections/mounts?namespace=${namespace}&locale=${locale}&access_token=${req.session.token}`
        // ?access_token=${req.session.token}`, //this URI is the API you want to hit
        // form: {
        //   client_id: config.clientID,
        //   token: req.session.token,
        // },
      },

      // callback
      (error, response, body) => {
        let mounts = JSON.parse(body)
        // console.log(mounts)
        res.send( 
          // token: {
            mounts
          // },
          // ...body,
        );
        // let introspectResponse = JSON.parse(body);

        // // valid token -> get more user data and send it back to the react app
        // if (introspectResponse.active) {
        //   request(
        //     // GET request to /registration endpoint
        //     {
        //       method: "GET",
        //       uri: `http://localhost:${config.fusionAuthPort}/api/user/registration/${introspectResponse.sub}/${config.applicationID}`,
        //       json: true,
        //       headers: {
        //         Authorization: config.apiKey,
        //       },
        //     },

        //     // callback
            // (error, response, body) => {
            //   res.send({
            //     token: {
            //       ...introspectResponse,
            //     },
            //     ...body,
            //   });
            // }
        //   );
        // }

        // // expired token -> send nothing
        // else {
        //   req.session.destroy();
        //   res.send({});
        // }
      }
    );
  }

  // no token -> send nothing
  else {
    res.send({});
  }
});

module.exports = router;
