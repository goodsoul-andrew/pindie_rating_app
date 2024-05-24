async function checkEmptyFieldsUser (req, res, next) {
  if (!req.body.username || !req.body.email || !req.body.password || req.body.password === "") {
    res.setHeader('Content-Type', 'application/json');
		res.status(400).send(JSON.stringify({ message: 'Заполни все поля' }));
  }
  else {
    next()
  }
}

module.exports = checkEmptyFieldsUser;