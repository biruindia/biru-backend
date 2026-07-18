import dotenv from 'dotenv';
import connectDB from './db/index.js';
import dns from 'node:dns'; // or const dns = require('node:dns');
import { error } from 'node:console';
dns.setServers(['1.1.1.1', '8.8.8.8']); 

dotenv.config(
    {
        path: './.env'
    }
);

connectDB()
.then(()=>{
     app.on(error, (error)=>{
        console.log('Error connecting to MongoDB:', error);
    })
    app.listen(process.env.PORT || 8000, ()=>
    {
        console.log(`server is running at port: ${process.env.PORT}`);
    });   
})
.catch((error) =>{
    console.error('Error connecting to MongoDB:', error);
})


/*
import express from 'express';
const app = express();

( async()=>{

    try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on('error', (error) => {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}
catch (error) {
    console.error('Error:', error);
   throw error;
}
})()
*/