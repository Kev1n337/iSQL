import * as bodyParser from "body-parser";
import * as express from "express";
import * as db from 'mysql';
import {Request, Response} from "express";
import {Connection, OkPacket, RowDataPacket, QueryError} from "mysql";

let connection: Connection = db.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'isql'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ...");
    } else {
        console.log("Error connecting database ...\n" + err);
    }
});

let router = express();

router.use(bodyParser.json());

router.use(function(req:Request, res:Response, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//--- creating new user [body: vorname="."&nachname="."] ----------------------
router.post("/execute", function (req: Request, res: Response) {
    let sql: string = req.body["sql"];
    if (sql && sql.trim().length !== 0) {
        connection.query(sql, function(err:QueryError, rows: RowDataPacket[]){
            if(!err) {
                res.status(200).json(rows);
            } else {
                res.status(505).send(err.code);
            }
        });
    } else {
        res.status(400).send("Not all mandatory parameters provided");
    }
});

router.listen(8080);