const express = require("express");
const config = require("../src/setup");
const cors = require("cors");
const session = require('express-session')

// configure Express app and install the JSON middleware for parsing JSON bodies
const app = express();
app.use(express.json());

// configure sessions
app.use(session(
    {
        secret: 'sfl3ieuayrzlfkh',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: 'auto',
            httpOnly: true,
            maxAge:  3600000
        }
    }
))

// configure CORS
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// use routes
app.use("/mounts", require("./routes/mounts"));
app.use("/login", require("./routes/login"));
app.use("/oauth-callback", require("./routes/oauth-callback"));
app.use("/logout", require('./routes/logout'))

// start server
app.listen(config.serverPort, () =>
  console.log(`FusionAuth app listening on port ${config.serverPort}.`)
);
