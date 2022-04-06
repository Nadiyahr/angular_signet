var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonRespons = {
    "movies": [
      {id: 1, name: 'Hydrogen', genre1: 'blabla', genre2: 'blubli', year: 2000},
      {id: 2, name: 'Helium', genre1: 'bleble', genre2: 'lala', year: 2000},
      {id: 3, name: 'Lithium', genre1: 'tutu', genre2: 'nini', year: 2000},
      {id: 4, name: 'Beryllium', genre1: 'titi', genre2: 'fifi', year: 2000},
      {id: 5, name: 'Boron', genre1: 'didi', genre2: 'dede', year: 2000},
    ],
  }
  res.json(jsonRespons);
});

module.exports = router;
