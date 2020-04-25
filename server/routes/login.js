const express = require('express');
const router = express.Router();
const config = require('../../src/setup')

router.get('/', (req, res) => {
    res.redirect(`https://us.battle.net/oauth/authorize?client_id=${config.clientID}&scope=wow.profile&state=eogiugs987&redirect_uri=${config.redirectURI}&response_type=code`);
})

module.exports = router;