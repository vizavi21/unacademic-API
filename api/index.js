const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const namespace = '/api/0';

app.use(cors());

const BODY_LIMIT = '500kb';
app.use(bodyParser.json({ limit:BODY_LIMIT }));
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }));

const router = express.Router();

router.get('/', function(req, res){
  res.send('welcome to unacademic-api');
});

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, JSON.stringify(req.body));
  next();
});

app.use(namespace, router);

app.get('*', function(req,res){
  res.redirect(namespace+'/');
});

module.exports = app; 
