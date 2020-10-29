"use strict";
exports.__esModule = true;
var jwt = require("jwt-simple");
var fs = require('fs');
var main = new Object({
    app: String,
    manteiner: String,
    secret: String,
    createToken: function () {
        if (!this.app || !this.manteiner || !this.secret) {
            throw "Data not provided";
        }
        var payload = {
            info: {
                app: this.app,
                manteiner: this.manteiner
            }
        };
        var secret = this.secret;
        var token = jwt.encode(payload, secret);
        var name = 'token' + '.json';
        name = name.toString();
        fs.writeFile(name, "{\"token\":\"" + token + "\"}", function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("File wrote as: " + name);
            }
        });
        var result = token;
        return result;
    },
    DecodeToken: function (token, secret) {
        var decoded = jwt.decode(token, secret);
        //Retorna el decoded token
        return decoded;
    }
});
module.exports = main;
