
const Question = require('../models/questionModel');
// Handle index actions
exports.index = function (req, res) {
    Question.get(function (err, question) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Question retrieved successfully",
            data: question
        });
    });
};
// Handle create question actions
exports.new = function (req, res) {
    var question = new Question();
    question.userCode = req.body.userCode;
    question.question = req.body.question;
    question.diffs = req.body.diffs;
    question.chat = req.body.chat;
// save the question and check for errors
question.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New question created!',
                data: question
            });
    });
};
