const {Router} = require('express');
const router = Router();
const axios = require('axios');
const Article = require('../data/models/article');
const Category = require('../data/models/feedlyCategory');
const StreamId = require('../data/models/feedlyStreamId');
const mongoose = require('mongoose');

let categoryArr = [];

const baseUrl = `https://cloud.feedly.com/v3/`;

const getCategoryStream = (req, res) => {
    Category.find().limit().exec().then(categories => {
        categories.map(category => {
            axios({
            method: 'GET',
            url: `${baseUrl}streams/ids?`,
            params: {streamId: category.id},
            headers: {
                Authorization: 'OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev'
            }
        })
            .then(result => {
                streamId = new StreamId({
                    label: category.label,
                    streamId: category.id,
                    entry_ids: result.data.ids
                })

                streamId.save();
            })
        })
        res.send(`job's done.`)
    })
    
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
router.delete('/category', emptyCategory);

module.exports = router;