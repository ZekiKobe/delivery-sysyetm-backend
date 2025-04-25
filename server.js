const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const db_connect = require('./database/db');
const userRoute = require('./routes/userRoute');
const addressRoute = require('./routes/addressRoute');
dotenv.config();


db_connect();

app.use(cors());
app.use(express.json());

app.use('/api/user',userRoute);
app.use('/api/address',addressRoute);


app.listen(process.env.PORT,() =>{
    console.log('server is running on port',process.env.PORT)
})