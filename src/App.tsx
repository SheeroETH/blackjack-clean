import React, { useState } from "react";
import BlackjackGame from "./components/BlackjackGame";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  // Importer les modules nécessaires
const express = require('express');
const cors = require('cors');

// Créer une instance de l'application express
const app = express();

// Appliquer CORS pour autoriser les requêtes provenant de certaines origines
app.use(cors({
  origin: ['https://blackjack-clean3.vercel.app', 'http://localhost:5173'],  // Remplacer par ton URL de prod et localhost
  methods: ['GET', 'POST']
}));

// Autres configurations et routes de ton application...
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Server running on port 3000");
});


  const startGame = () => {
    setGameStarted(true);  // Démarrer la partie
    console.log("Jeu démarré!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!gameStarted ? (
        <button onClick={startGame} className="px-6 py-3 bg-purple-600 text-white rounded">
          Lancer une partie
        </button>
      ) : (
        <BlackjackGame />
      )}
    </div>
  );
}

export default App;
