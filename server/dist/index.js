"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
require("dotenv").config();
const app = (0, express_1.default)();
const db = mysql_1.default.createConnection({
    host: process.env.AWS_ENDPOINT,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "my_db",
    port: 3306,
});
db.connect((error) => {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log("MySQL Connected!");
    }
});
app.get("/", (req, res, next) => {
    res.send("Hello");
});
app.listen(5000, () => console.log("Server is running. :)"));
//# sourceMappingURL=index.js.map