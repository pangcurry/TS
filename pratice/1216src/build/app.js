"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
// import cors from 'cors';
var app = express_1.default();
app.listen(3000, function () {
    console.log('server 3000 open !');
});
app.use('/', routes_1.default);
// app.use(cors());
app.get('/ping', function (req, res) {
    res.status(200).json({
        message: "pong ih"
    });
});
