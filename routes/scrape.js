const {Router} = require('express');
const router = Router();
const fs = require('fs');
const axios = require('axios');
const consumerKey = '86215-5b0e674ccb8d69cc67eeb7ee';

const baseUrl = 'https://text.getpocket.com/v3/text';

const scrape = (req, res) => {
    const url = req.body.url;

    axios.get(`${baseUrl}?consumer_key=${consumerKey}&url=${url}`)
        .then(result => {
            fs.writeFile('article.js', result.data.article, (err) => {
                if (err) throw err;
            })
        })
}

router.post('/', scrape);

module.exports = router;