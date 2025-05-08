// 📄 models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    questions: [
        {
            question: String,
            options: [String],
            correctAnswer: String,
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    stars: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

module.exports = mongoose.model('Quiz', quizSchema);
