import mongoose from "mongoose";
const connection = mongoose.connection;

import { DB_NAME } from "../../constants.js";
//const mongoose = require("mongoose");
//const { connection } = mongoose;

const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB_HOST: ${connection.host}`);

    } catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}
export default connectDB