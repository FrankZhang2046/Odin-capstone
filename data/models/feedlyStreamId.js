const mongoose = require('mongoose');

const streamIdSchema = mongoose.Schema({
    label: String,
    streamId: String,
    entry_ids: Array
});

module.exports = mongoose.model('StreamId', streamIdSchema);