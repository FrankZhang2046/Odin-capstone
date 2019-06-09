const {Router} = require('express');
const router = Router();
const axios = require('axios');
const Article = require('../data/models/article');
const Category = require('../data/models/feedlyCategory');
const mongoose = require('mongoose');

let categoryArr = [];

const baseUrl = `https://cloud.feedly.com/v3/`;

const getCategoryStream = (req, res) => {
    axios({
        method: 'GET',
        url: `${baseUrl}streams/ids?`,
        params: {streamId: req.body.id},
        headers: {
            Authorization: 'OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev'
        }
    })
        .then(result => res.send(result.data))
}

const getEntry = (req, res) => {

    axios({
        method: 'GET',
        url: `${baseUrl}entries/${req.body.id}`,
        headers: {
            Authorization: 'OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev'
        }
    })
        .then(result => res.send(result.data))
}

const testDb = (req, res) => {
    const article = new Article({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    })
    article.save().then(result => res.send(result));
}

const writeCategory = (req, res) => {
    axios({
        method: 'GET',
        url: `${baseUrl}categories`,
        headers: {
            Authorization: 'OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev'
        }
    })
        .then(result => {
            result.data.map(item => {
                const category = new Category({
                    id: item.id,
                    label: item.label
                })
                category.save();
            })
                .then(res.send(`categories saved`))
        })
}

const emptyCategory=(req,res)=>{
    Category.remove().exec().then(res.send(`all categories emptied`))
}

router.post('/entry', getEntry);
router.post('/category', writeCategory);
router.post('/stream', getCategoryStream);
router.post('/test', testDb);
router.delete('/category', emptyCategory);

module.exports = router;