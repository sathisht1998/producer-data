import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';

import router  from './router';

const app =express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

// app.use(cors({    
//     credentials: true,
// }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());


const server = http.createServer(app);

server.listen(8765,() =>{
    console.log('server running on the given  port :');
    
});

const MONGO_URL = 'mongodb+srv://sathishth1998:WyA3sRYi7ShiKLoM@cluster0.kz9lm88.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.Promise =  Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error',(error: Error) =>console.log(error))


app.use('/',router());