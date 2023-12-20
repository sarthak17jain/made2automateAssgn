import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import DefaultData from './default.js';
import productRouter from './routes/productRouter.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
console.log()
const PORT = process.env.PORT || 8000;
const db_link = process.env.DB_LINK;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: process.env.CLIENT_URL}));

mongoose.set('strictQuery', true);

mongoose.connect(db_link)
.then(function(db){
    // console.log(db);
    app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
    DefaultData();
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

app.use('/productData', productRouter);