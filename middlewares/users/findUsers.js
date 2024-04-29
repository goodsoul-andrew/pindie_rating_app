const users = require('../../models/user');

async function findUsers(req, res, next) {
	let criteria = req.query;
	'/users GET', criteria;
	try {
		req.users = await users.find(criteria).select('-password');
		next();
	} catch (error) {
		res.status(404).send({ message: 'User not found' });
	}
}

module.exports = findUsers;
