const {Router} = require('express');
const router = Router();
const axios = require('axios');

const baseUrl = `https://cloud.feedly.com/v3/`;

const getCategories = (req, res) => {
    axios({
        method: 'GET',
        url: `${baseUrl}categories`,
        headers: {
            Authorization: 'OAuth AyCIEtdYucbSKlppncbpVe8JlyoJ7M2C-MTuhXXekzStZGkrDRScscSpYkMoeVvSvourGh5U4nKW-h8LQToH1zeNVq8yV5osg00NP-KaD6noCwhCXATltOtTz4gVdW-tccjxP0AwppU8nL3vmjGxlYkVDoX7lydlpZMWniqJf2T_58zL8z_n6j2Q8jVrTlYLCyHddOg3MfMGxi1vvUvF7NnKhXQ2cGwNfdWOciXH5Qo4tYyc2CoS3H4:feedlydev'
        }
    })
        .then(result => res.send(result.data))
}

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

router.get('/', getCategories);
router.post('/entry', getEntry);
router.post('/stream', getCategoryStream);

module.exports = router;