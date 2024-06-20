import express from "express"
import { userdata } from "../controllers/formController.js"


const formRoutes = express.Router()

formRoutes.post("/userdata" , userdata)

export default formRoutes