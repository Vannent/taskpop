import express, { Application, Request, Response, NextFunction } from "express";
import mysql, { Connection } from "mysql";

require("dotenv").config();

const app: Application = express();

const db: Connection = mysql.createConnection({
  host: process.env.AWS_ENDPOINT,
  // MySQL comes with default User called Root.
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: "my_db",
  port: 3306,
});

db.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("MySQL Connected!");
  }
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(5000, () => console.log("Server is running. :)"));
