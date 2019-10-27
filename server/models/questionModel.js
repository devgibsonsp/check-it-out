const mongoose = require('mongoose');
// Setup schema
const questionSchema = mongoose.Schema({
    userCode: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    diffs: {
        type: String,
        required: true
    },
    chat: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
const Question = module.exports = mongoose.model('question', questionSchema);
module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
}