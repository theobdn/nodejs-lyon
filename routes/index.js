var express = require('express');
var router = express.Router();
const { readFile } = require('fs');

/* GET home page. */
router.get('/', function (request, response) {
  readFile('./products.json', (error, products) => {
    if (error) console.error(error);

    products = JSON.parse(products);

    response.render('index', { title: 'Home page', products });
  })
});

module.exports = router;
