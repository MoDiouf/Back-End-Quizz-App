require('dotenv').config(); // Charger les variables d'environnement
const app = require('./app'); // Charger l'application principale (app.js)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
