import express, { json } from "express";
require('express-async-errors');
import cors from "cors";
import router from "./routes/router";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

const PORT:number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => console.log("Server online!"));
