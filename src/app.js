import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"})) // we recieve data in many form like in json so we set limit size of 16KB
app.use(express.urlencoded({extended:true, limit:"16kb"})) // data is also sent in url like divyanshu+wakodikar or divyanshu%20
//extended is used for like object ke andr bhi object le sakte h
app.use(express.static("public")) //to store files or assets
app.use(cookieParser())
export {app}

//use of middleware - e.g to check if user is logged in when getting request from instagram 
