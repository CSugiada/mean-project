const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {type: String, reuired: true},
    content: {type: String, reuired: true}
});

module.exports = mongoose.model('Post', postSchema);
