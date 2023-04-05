import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import morgan from "morgan";
import cameraRoutes from './Routes/cameraRoutes.js'
import cameraNetworksRoutess from './Routes/cameraNetworksRoutes.js'

const app = express()

//middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(morgan('dev'))

//.envfile
dotenv.config()


//database connection
mongoose.connect(process.env.MONGO_DB,
{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT,
() => console.log(`listening ${process.env.PORT}`)))
.catch((error)=>console.log(error))

//usage of routes
app.use('/',cameraRoutes)
app.use('/',cameraNetworksRoutess)
