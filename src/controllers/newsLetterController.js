
import newsLetterModel from "../models/newsLetterModel.js";


export const news_letter_email = async (req, res) => {


    try {

        let { email } = req.body

        if (!email) {
            return res.status(400).json({ result: "unsuccessful", response: "Please provide email" })
        }

        let email_exist = await newsLetterModel.find({ email: email })

        if (email_exist.length > 0) {
            return res.status(400).json({ result: "unsuccessful", message: "email is already exist" })
        }

        let data = await newsLetterModel.create({ email: email })
        return res.status(200).json({ result: "successful", output: data, message: "email is saved successfully" })


    } catch (error) {

        console.log(error, "error")
        return res.status(500).json({ result: "unsuccessful", message: "internal server error" })

    }
}