import { Express } from "express";
import cors from "cors";
import cookieParser from cookieParser;
const app = Express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit :"16kb"}))
app.use(express.urlencoded({extended : true,limit : "16kb"}))
app.use(express.ststic("public"))
app.use(cookieParser())

export { app }