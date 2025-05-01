const express = require('express');
const { HLTV } = require('hltv');
const app = express();
const PORT = process.env.PORT || 3000;

// Importar as rotas
const teamRoutes = require('./routes/team');
const eventsRoutes = require('./routes/events');

// Configuração das rotas
app.use(teamRoutes); // Define a rota base para "team"
app.use(eventsRoutes); // Define a rota base para "events"


// Inicializar o servidor (para testes locais)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}

module.exports = app; // Exportar para o Vercel
