import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config(
    {
    path : './.env'
    }
)
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    app.on("ERROR",(error)=>{
        console.log("ERROR",error);
        throw error
        
    })
        
    })
})
.catch((err)=>{
    console.log("Mongodb connection faild !!! ",err);
    
})















// /*
// import express from "express";

// const app = express()

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on('ERROR',(error)=>{
//             console.log("ERROR",error);
//             throw error
//         })    
//         app.listen(process.env.PORT,()=>{
//             console.log(`App i running on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error('ERROR',error)
//         throw error

//     }
// })()
//     */