import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './src/commons/sequelize.js';
import userRoute from './src/routes/UserRoute.js';
// import adminRoute from './src/routes/AdminRoute.js';
// import cantonRoute from './src/routes/CantonRoute.js';
// import groupRoute from './src/routes/GroupRoute.js';


const app = express();
const port = 3001;

// cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use('/api/v1/users');
app.use('/api/v1/users', userRoute);
// app.use('/api/v1/admin', adminRoute);
// app.use('/api/v1/canton', cantonRoute);
// app.use('/api/v1/group', groupRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
