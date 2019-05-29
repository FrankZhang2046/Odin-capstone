const {Router} = require('express');
const router = Router();
const axios = require('axios');

const baseUrl = 'https://getpocket.com/v3/oauth/request?';

const getAccessToken = (req, res) => {
    const {key, uri} = req.body;
    
    axios.post(`${baseUrl}`, {
        consumer_key: key,
        redirect_uri: uri
    })
        .then(result => res.send(result.data))
}

router.post('/', getAccessToken);

module.exports = router;