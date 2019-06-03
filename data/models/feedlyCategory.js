const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    id: String,
    label: String
})

module.exports = mongoose.model('FeedlyCategory', categorySchema);