//two type of import in js one is common js and other is module
// npm i nodemon nodemon refreshes server
//use try catch async await to connect database
import dotenv from 'dotenv';
dotenv.config({ path: './env' });


// import mongoose from "mongoose"; 
// import { DB_NAME } from "./constants";
// import dotenv from "dotenv";
import connectDB from "./src/db/index.js";

// dotenv.config({
//     path:',/env'
// })

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>
console.log(
    "MONGO DB connection failed !!!",err
))
// ;(async()=>{
//     try {
//         await mongoose.connect(`$process.env.MONGODB_URL/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERROR:",error);
//             throw error
//             app.listen(process.env.PORT,()=>{
//                 console.log(`App is listening on port ${process.env.PORT}`);
//             })
//         })
//     } catch (error) {
//         console.error("ERROR:",error)
//         throw err
//     }
// })()
// //iifies
