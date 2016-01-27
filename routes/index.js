var express = require('express');
var router = express.Router();
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', function() { console.log('connected'); });

/* GET home page. */
router.get('/led/:status', function(req, res, next) {
  client.publish('/pi/led/status', req.params.status);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({status: req.params.status}));
});

module.exports = router;
