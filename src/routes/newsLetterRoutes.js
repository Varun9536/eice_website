import express from "express"
import { news_letter_email , delete_email } from "../controllers/newsLetterController.js"

const newsLetterRoutes = express.Router()


newsLetterRoutes.post("/email" , news_letter_email)
newsLetterRoutes.post("/delete/email" , delete_email)

export default newsLetterRoutes