"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
exports.app = express();
var port = 3333;
exports.app.get('/', function (req, res) {
    console.log("funcionando!!");
    res.send('ola');
});
exports.app.listen(port, function () {
    console.log("service fuction initial    http://localhost:".concat(port));
});
