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

const writeArticlesToDatabase = (req, res) => {
    const {key, token} = req.body;
    axios.get(`https://getpocket.com/v3/get?consumer_key=${key}&access_token=${token}`)
         .then(result => {
             res.send(result.data)
         })
    // res.send(`key: ${key} token: ${token}`)
}

router.post('/', getAccessToken);
router.post('/write', writeArticlesToDatabase);

module.exports = router;