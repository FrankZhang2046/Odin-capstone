const mongoose = require('mongoose');

const pocketArticleSchema = mongoose.Schema({
    user_id: String,
    item_id: String,
    resolved_id: String,
    given_url: String,
    given_title: String,
    favorite: String,
    status: String,
    time_added: String,
    time_updated: String,
    time_read: String,
    time_favorited: String,
    sort_id: Number,
    resolved_title: String,
    resolved_url: String,
    excerpt: String,
    is_article: String,
    is_index: String,
    has_video: String,
    has_image: String,
    word_count: String,
    lang: String,
    time_to_read: Number,
    top_image_url: String,
    domain_metadata: Object,
    listen_duration_estimate: Number
})

module.exports = mongoose.model('pocketArticle', pocketArticleSchema);