import { decode } from "jwt-simple";
import { pathToFileURL } from "url";

const jwt = require("jwt-simple")
var fs = require('fs');
var main = new Object({
    app: String,
    manteiner: String,
    secret: String,
    createToken(rangem: number, rangemx: number) {
        if (!this.app || !this.manteiner || !this.secret) {
            throw "Data not provided"
        }
        var payload = {
            info: {
                app: this.app,
                manteiner: this.manteiner,
            }
        }
        var secret: String = this.secret;
        var token: string = jwt.encode(payload, secret);
        let name: any = 'token' + Math.floor(Math.random() * (rangemx + rangem + 1)) + rangem + '.json';
        name = name.toString();
        fs.writeFile(name, `{"token":"${token}"}`, (err) => {
            if (err) {
                console.log(err);
                
            } else {
                console.log("File wrote as: " + name);
                
            }
        })
        var result: any = token;
        return result;
    },
    DecodeToken(token:String, secret: string) {
        var decoded = jwt.decode(token, secret);
        //Retorna el decoded token
        return decoded;
    }
})

module.exports = main;
