const express = require('express');
const path = require('path');
const {
	getAllGames,
	findGameById,
	deleteGame,
	createGame,
	findGames,
	updateGame,
	checkEmptyFieldsGame,
	checkUsersSafe,
	checkCategoriesAvailable,
	checkAuth,
	checkAdmin
} = require('../../middlewares');

function sendGames(req, res) {
	res.send(req.games);
}

function sendGame(req, res) {
	res.send(req.game);
}

function sendUpdateStatus(req, res) {
	res.send({ message: 'Игра обновлена' });
}

const gamesRoute = express.Router();
gamesRoute.get('/games', findGames, sendGames);
gamesRoute.get('/games/:id', findGameById, sendGame);
gamesRoute.post('/games', checkAuth, checkAdmin, checkEmptyFieldsGame, checkCategoriesAvailable, createGame, sendGame);
gamesRoute.put(
	'/games/:id',
	checkAuth,
	checkAdmin,
	checkEmptyFieldsGame,
	checkUsersSafe,
	checkCategoriesAvailable,
	updateGame,
	sendUpdateStatus
);
gamesRoute.delete('/games/:id', checkAuth, checkAdmin, deleteGame, sendGame);

module.exports = gamesRoute;