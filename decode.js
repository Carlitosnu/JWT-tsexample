var token = require('./jwt');
var jwt = Object.create(token);
var data = require('./token.json')
jwt.secret = "passwordverysecure";

console.log(jwt.DecodeToken(data.token,jwt.secret))