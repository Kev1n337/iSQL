"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var db = require("mysql");
var connection = db.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'isql'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ...");
    }
    else {
        console.log("Error connecting database ...\n" + err);
    }
});
var router = express();
router.use(bodyParser.json());
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//--- creating new user [body: vorname="."&nachname="."] ----------------------
router.post("/execute", function (req, res) {
    var sql = req.body["sql"];
    if (sql && sql.trim().length !== 0) {
        connection.query(sql, function (err, rows) {
            if (!err) {
                res.status(200).json(rows);
            }
            else {
                res.status(505).send(err.code);
            }
        });
    }
    else {
        res.status(400).send("Not all mandatory parameters provided");
    }
});
router.listen(8080);
//# sourceMappingURL=server.js.map