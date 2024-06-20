import express from "express"
import dotenv from "dotenv"
import cors from "cors"


// env configuration
dotenv.config()

// api controllers-routes
import formRoutes from "../routes/formRoutes.js"
import newsLetterRoutes from "../routes/newsLetterRoutes.js"


// express app
export const app = express()


// cors error correction
app.use(cors())

// json  parsing
app.use(express.json())


// api endpoints
app.use("/v1/form", formRoutes)
app.use("/v1/newsletter" , newsLetterRoutes)