import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'

const app = express()

//middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

//.envfile
dotenv.config()


//database connection
mongoose.connect(process.env.MONGO_DB,
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT,
() => console.log(`listening ${process.env.PORT}`)))
.catch((error)=>console.log(error))