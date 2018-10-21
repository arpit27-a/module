var express = require('express');
var router = express.Router();
var mongodb     = require('mongodb');
var MongoClient = mongodb.MongoClient;
dburl='mongodb://bringo:Bringofs8@ds227243.mlab.com:27243/bringo';
var requ=require('../app_server/controllers/requestdetails');
var vis=require('../app_server/controllers/visitordetails');
var cntrl=require('./controllers/main');
router.post('/bringo/visitorAdmin',vis.visitor);
router.post('/bringo/request',requ.request);
router.get('/bringo/request',cntrl.request);
//router.get('/bringo/visitorAdmin',cntrl.visitorAdmin);
router.get('/bringo/login',cntrl.login);
router.get('/bringo/loginFaculty',cntrl.loginFaculty);
router.get('/bringo/records',cntrl.records);
router.get('/bringo/guestRecords',cntrl.guestRecords);
router.get('/bringo/admin', function(req, res) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('visitordetails').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('admin.ejs', {data: docs});
      db.close();
    });
  });
});
//render requestor data
router.get('/bringo/inbox', function(req, res) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    db.collection('requestdetails').find().toArray(function(err, docs){
      if(err) throw err;
      res.render('inbox.ejs', {data: docs});
      db.close();
    });
  });
});
//
router.get('/bringo/visitorAdmin', function(req, res) {

  MongoClient.connect(dburl, function(err, db) {
    if(err) {  console.log(err); throw err;  }
    data = '';
    var query = { requesteremail:'abc@chitkara.edu.in'};
    db.collection('requestdetails').find(query).toArray(function(err, docs){
      if(err) throw err;
      res.render('visitordetailsadmin.ejs', {data: docs});
      db.close();
    });
  });
});



module.exports = router;
