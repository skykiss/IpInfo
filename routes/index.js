var express = require('express');
var ip2region = require('../lib/ip2region.js');
var requestInfo = require('../plugins/requestInfo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data =  requestInfo(req);
  var dbService = ip2region.create(__dirname + '/../lib/data/ip2region.db');
  var info = dbService.binarySearchSync(data['ip']);
  console.log(info);
  res.render('index', {userAgent: data['user-agent'], ip: data['ip'], city: info.city, region: info.region});
});


router.get('/api', function(req, res, next) {
  var data =  requestInfo(req);
  var dbService = ip2region.create(__dirname + '/../lib/data/ip2region.db');
  var info = dbService.binarySearchSync(data['ip']);
  console.log(info);
  res.json({userAgent: data['user-agent'], ip: data['ip'], city: info.city, region: info.region});
});


router.post('/', function(req, res, next){
     
});

module.exports = router;

