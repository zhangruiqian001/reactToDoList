var express = require('express');
var router = express.Router();

router.get('/todos', function(req, res, next) {
	var data = [
  		{text: "This is one todo"},
  		{text: "This is another todo"}
	];
	res.json(data);
});

module.exports = router;
