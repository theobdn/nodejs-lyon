const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
  const persons = [
    { name: 'Khalid', age: 25 },
    { name: 'Amel', age: 4 },
    { name: 'Noam', age: 1 }
  ];

  response.render('about', { persons, title: 'About us' })
});

module.exports = router;
