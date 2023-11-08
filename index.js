import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./src/commons/sequelize.js";
import userRoute from "./src/routes/UserRoute.js";
import studentRoute from "./src/routes/studentRoute.js";
// import adminRoute from './src/routes/AdminRoute.js';
import 'dotenv/config';
import cantonRoute from "./src/routes/cantonRoute.js";
import groupRoute from "./src/routes/groupRoute.js";
import taskRoute from "./src/routes/taskRoute.js";
import targetRoute from "./src/routes/targetRoute.js";
import recordRoute from './src/routes/recordRoute.js';
// import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 4000;
// mongoose.connect("mongodb+srv://can:50473524.Su@tasks.b85azwo.mongodb.net/?retryWrites=true&w=majority");


app.use((req,res) => {
  res.send("hello from backend")
})
// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use('/api/v1/users');
app.use("/api/v1/users", userRoute);
app.use("/api/v1/tasks", taskRoute);
app.use("/api/v1/targets", targetRoute);
app.use('/api/v1/records', recordRoute);
app.use("/api/v1/cantons", cantonRoute);
app.use("/api/v1/groups", groupRoute);
app.use("/api/v1/students", studentRoute);

app.listen(port|| 4000, () => {
  console.log(`Example app listening on port ${port}`);
});
