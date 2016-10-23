const express = require('express');
const router = express.Router();
const request = require('request');


router.route('/reviews/:q')
.get((req, res) => {
  let q = req.params.q;
  request('http://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=102294&t.k=gMnM4nqwSaU&action=employers&q=' + q +'&userip=192.168.43.42&useragent=Mozilla/%2F4.0', function(err, response, body) {
    console.log('body', body)
    res.send(body)
  })
});

module.exports = router;
