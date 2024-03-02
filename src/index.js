// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
// src/index.js
import kingDB from "./db/index.js";

dotenv.config({
    path: `/env`
});

kingDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!! ",err)
})
    


//method 1 to connect db
// import { Express } from "express";
// const app = express()

// ( async() => {
//     try{
//        await mongoose.connect('${process.env.MONGODB_URI}/{DB_NAME}')
//        app.on("error",(error)=>{
//         console.log("errr:",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log('APP is listening on port ${process.env.PORT}');
//        })
//     }catch(error){
//         console.log("ERROR",error)
//         throw err
//     }
// })()