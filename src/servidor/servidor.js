"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.app = void 0;
var express = require("express");
var controlorderotas_1 = require("../controller/controlorderotas");
exports.app = express();
exports.port = 3333;
exports.app.use(express.json());
exports.app.get('/', function () {
    controlorderotas_1.fazp.get;
});
exports.app.post('/etc', function () {
    controlorderotas_1.fazp.post;
});
exports.app.listen(exports.port, function () {
    console.log("service fuction initial    http://localhost:".concat(exports.port));
});
