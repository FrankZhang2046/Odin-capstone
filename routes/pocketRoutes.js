const {Router} = require('express');
const router = Router();
const axios = require('axios');
const PocketArticle = require('../data/models/pocketArticle');

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
    axios.get(`https://getpocket.com/v3/get?consumer_key=${key}&access_token=${token}&count=20`)
         .then(result => {
                const myList = result.data.list;
                const myKeys = Object.keys(result.data.list);
                console.log(myList);
                for (let i =0; i<myKeys.length; i++){
                    const item = myList[`${myKeys[i]}`];
                    const article = new PocketArticle({
                        user_id: token,
                        item_id: item.item_id,
                        resolved_id: item.resolved_id,
                        given_url: item.given_url,
                        given_title: item.given_title,
                        favorite: item.favorite,
                        status: item.status,
                        time_added: item.time_added,
                        time_updated: item.time_updated,
                        time_read: item.time_read,
                        time_favorited: item.time_favorited,
                        sort_id: item.sort_id,
                        resolved_title: item.resolved_id,
                        resolved_url: item.resolved_url,
                        excerpt: item.excerpt,
                        is_article: item.is_article,
                        is_index: item.is_index,
                        has_video: item.has_video,
                        has_image: item.has_image,
                        word_count: item.word_count,
                        lang: item.lang,
                        time_to_read: item.time_to_read,
                        top_image_url: item.top_image_url,
                        listen_duration_estimate: item.listen_duration_estimate
                    })
                    article.save();
                }
                res.send(`articles written to database`);
             })
    // res.send(`key: ${key} token: ${token}`)
}

const retrieveArticles = (req, res) => {
    const {token} = req.body;
    PocketArticle.find({"user_id": token}).exec().then(result => res.send(result))
}

const emptyDb=(req,res)=>{
    PocketArticle.remove().exec().then(res.send(`all articles emptied`))
}

router.post('/', getAccessToken);
router.post('/write', writeArticlesToDatabase);
router.delete('/', emptyDb);
router.get('/get', retrieveArticles);

module.exports = router;