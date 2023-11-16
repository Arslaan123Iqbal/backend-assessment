const express = require("express");
const router = express.Router();
const tradesController = require("../controllers/trades");

// Routes

// Post: Create Trade
router.post("/", tradesController.createTrade);

//Get: Get All trades
router.get("/", tradesController.getTrades);

//Get: Get  Tade by ID
router.get("/:id", tradesController.getTradeById);

//Delete: Check method
router.delete("/:id", tradesController.handleInvalidMethod);

//Put: Check method
router.put("/:id", tradesController.handleInvalidMethod);

//Patch: Check method
router.patch("/:id", tradesController.handleInvalidMethod);

module.exports = router;
