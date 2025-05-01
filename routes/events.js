const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

router.get('/events/furia', async (req, res) => {
    try {
        const furiaId = 8297; // ID da FURIA
        const events = await HLTV.getEvents({ attendingTeamIds: [furiaId] }); // Filtra eventos pelo ID da FURIA

        // Converter datas para um formato legível
        const convertedEvents = events.map(event => ({
            id: event.id,
            name: event.name,
            dateStart: new Date(event.dateStart).toLocaleDateString('pt-BR'), // Converte para dd/mm/yyyy
            dateEnd: new Date(event.dateEnd).toLocaleDateString('pt-BR'), // Converte para dd/mm/yyyy
            location: event.location,
            prizePool: event.prizePool,
            numberOfTeams: event.numberOfTeams,
            featured: event.featured
        }));

        res.json(convertedEvents); // Retorna os eventos com datas formatadas
    } catch (error) {
        console.error('Erro na rota /events/furia:', error);
        res.status(500).json({ message: 'Erro ao buscar eventos da FURIA', error: error.message });
    }
});

module.exports = router; // Exporta o roteador