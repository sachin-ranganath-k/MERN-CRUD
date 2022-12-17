//Express server creation

import express from "express"; //Need to add "type":"module" in package.json to use import
import DBConnection from "./database/db.js";
import route from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/", route);

const PORT = 8000;
DBConnection();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
