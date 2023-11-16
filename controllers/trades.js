const Trade = require('../models/trades');


//Controllers

//Create Trade
const createTrade = async (req, res) => {
    try {
        const newTrade = req.body;
        const createdTrade = await Trade.create(newTrade);
        res.status(201).json(createdTrade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// Get Trades
const getTrades = async (req, res) => {
    try {
        const { type, user_id } = req.query;
        let whereClause = {};

        if (type) {
            whereClause.type = type;
        }

        if (user_id) {
            whereClause.user_id = user_id;
        }

        const trades = await Trade.findAll({ where: whereClause });
        res.status(200).json(trades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//Get Specific Trade by id
const getTradeById = async (req, res) => {
    try {
        const tradeId = parseInt(req.params.id);
        const trade = await Trade.findByPk(tradeId);

        if (trade) {
            res.status(200).json(trade);
        } else {
            res.status(404).send('ID not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Handlde invalid Methods
const handleInvalidMethod = (req, res) => {
    res.status(405).send('Method Not Allowed');
};

module.exports = {
    createTrade,
    getTrades,
    getTradeById,
    handleInvalidMethod,
};
