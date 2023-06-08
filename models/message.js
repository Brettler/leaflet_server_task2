const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const Message = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', Message)