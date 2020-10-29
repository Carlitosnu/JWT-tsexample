var token = require('./jwt');
var jwt = Object.create(token);

jwt.app = "Application Name";
jwt.manteiner = "Manteiner";
jwt.secret = "passwordverysecure";

console.log(jwt.createToken())