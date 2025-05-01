const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

// Rota para buscar apenas os dados filtrados da equipe FURIA
router.get('/team/furia', async (req, res) => {
    try {
        const team = await HLTV.getTeam({ id: 8297 }); // Busca os dados da FURIA

        // Filtrar apenas os dados necessários
        const filteredData = {
            id: team.id,
            name: team.name,
            logo: team.logo,
            instagram: team.instagram,
            country: team.country,
            rank: team.rank,
            players: team.players.map(player => ({
                name: player.name,
                id: player.id,
                timeOnTeam: player.timeOnTeam,
                mapsPlayed: player.mapsPlayed,
                type: player.type,
            })),
        };

        res.json(filteredData); // Retorna somente os dados filtrados
    } catch (error) {
        console.error('Erro na rota /team/furia:', error);
        res.status(500).json({ message: 'Erro ao buscar dados da FURIA', error: error.message });
    }
});

module.exports = router; // Exporta o roteador
