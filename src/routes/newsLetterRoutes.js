import express from "express"
import { news_letter_email } from "../controllers/newsLetterController.js"

const newsLetterRoutes = express.Router()


newsLetterRoutes.post("/email" , news_letter_email)

export default newsLetterRoutes