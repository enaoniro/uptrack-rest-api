import "dotenv/config";
import connectDB from "./config/dbConn.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import "./src/commons/sequelize.js";
import UserRoute from "./src/routes/UserRoute.js";
import studentRoute from "./src/routes/studentRoute.js";
import cantonRoute from "./src/routes/cantonRoute.js";
import grupRoute from "./src/routes/grupRoute.js";
import taskRoute from "./src/routes/taskRoute.js";
import targetRoute from "./src/routes/targetRoute.js";
import recordRoute from "./src/routes/recordRoute.js";
import rootRoute from './src/routes/rootRoute.js';
import mongoose from "mongoose"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use __dirname throughout the module


const app = express();

const port = process.env.PORT || 4000;
// connectDB();
// mongoose.connect(process.env.DATABASE_URI);
app.use('/', express.static('/public'))

app.use(cors());

app.use('/', rootRoute);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use('/api/v1/users');
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/tasks", taskRoute);
app.use("/api/v1/targets", targetRoute);
app.use("/api/v1/records", recordRoute);
app.use("/api/v1/cantons", cantonRoute);
app.use("/api/v1/grups", grupRoute);
app.use("/api/v1/students", studentRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
