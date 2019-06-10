const mongoose = require('mongoose');

const feedlyArticleSchema = mongoose.Schema({
    id: String,
    originId: String,
    fingerprint: String,
    content: Object,
    title: {type: String, default: null},
    alternate: {type: Array, default: null},
    crawled: Number,
    published: Number,
    origin: {type: Object, default: null},
    unread: {type: Boolean, default: null},
    categories: String,
    commonTopics: Array,

});

module.exports = mongoose.model('FeedlyArticle', feedlyArticleSchema);