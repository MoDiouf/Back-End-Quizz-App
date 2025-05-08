const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Créer un nouveau quiz
router.post('/', async (req, res) => {
    try {
        const { title, description, questions, createdBy } = req.body;

        // Vérifie que tous les champs sont présents
        if (!title || !description || !questions || !createdBy) {
            return res.status(400).json({ message: 'Tous les champs sont requis' });
        }

        const quiz = new Quiz({ title, description, questions, createdBy });
        await quiz.save();

        res.status(201).json(quiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du quiz' });
    }
});
router.get("/", async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) {
            return res.status(404).json({ message: "Quiz non trouvé" });
        }
        res.json(quiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});
// Mettre à jour un quizz
router.put("/:id", async (req, res) => {
    try {
        const updatedQuiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedQuiz) {
            return res.status(404).json({ message: "Quiz non trouvé" });
        }
        res.json(updatedQuiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Supprimer un quizz
router.delete("/:id", async (req, res) => {
    try {
        const deletedQuiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!deletedQuiz) {
            return res.status(404).json({ message: "Quiz non trouvé" });
        }
        res.json({ message: "Quiz supprimé avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;
