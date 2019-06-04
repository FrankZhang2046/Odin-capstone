const {Router} = require('express');
const router = Router();
const axios = require('axios');

const getAccessToken = (req, res) => {
    const {key, token} = req.body;
    axios.post('https://getpocket.com/v3/oauth/authorize', {
        consumer_key: key,
        code:token
    })
        .then(result => res.send(result.data))
}

router.post('/', getAccessToken);

module.exports = router;